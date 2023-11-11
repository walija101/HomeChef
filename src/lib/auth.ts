import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from './mongodb'
import * as Realm from 'realm-web'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            type: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Enter your email' },
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials: any) {
                try {
                    if(!credentials || !credentials.email || !credentials.password)
                        return null;

                    let realmApp  = new Realm.App({ id: process.env.REALM_APP_ID ?? "" });
                    if(credentials.ourMode && (credentials.ourMode === 'signingUp'))
                        await realmApp.emailPasswordAuth.registerUser({
                            email: credentials.email,
                            password: credentials.password
                        })
                    let creds = Realm.Credentials.emailPassword(credentials.email, credentials.password)
                    let user = await realmApp.logIn(creds) as any;

                    return user.customData
                } catch(err: any) {
                    console.error(err)
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
        maxAge: 86400
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    callbacks: {
        async jwt ({ token, user }) {
            if(user) {
                let finalUser = user as any;
                /* if(account && account.provider.trim().toLowerCase() === 'google') 
                    finalUser = await createAnonymous({ email: user.email as string, provider: "google" }); */
                     
                token.id = finalUser._id;
                token.email = finalUser.userEmail ?? finalUser.email;
                token.realm_id = finalUser.realm_id;           
            }
            return token
        },
        async session ({ session, token }: { session: any, token: any }) {
            if(token) 
            {
                if(session && session.user) {
                    session.user.id = token.id;
                    session.user.realm_id = token.realm_id;
                    if(token.picture)
                        session.user.iconPic = token.picture;
                }
            }   
            return session;
        }
    }
};