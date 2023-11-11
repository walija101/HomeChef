import { getServerSession } from 'next-auth/next';
import {connectToDB} from '@/lib/db'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServers } from 'dns';
import { authOptions } from '@/lib/auth';
import {User} from '@/lib/models/user/user.types'
import mongoose from 'mongoose';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  )
{
    if(req.method !== 'POST') {
        return res.status(405).end('This end point expects POST requests only');
    }
    try {
        await connectToDB();

        const serverResponse = await getServerSession(req, res, authOptions)
        const session = serverResponse ? JSON.parse(JSON.stringify(serverResponse)) : null;
        if (!session)
            return res.status(401).json({error: 'You are not logged in, please sign in and try again'})

        const {name, email, phone, isChef} = req.body

        const user = await User.generate

        


    } catch (error: any) {
        console.log(error)
        res.status(500).json({error: error.message ?? error})
    }
}

