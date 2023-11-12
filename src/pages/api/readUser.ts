import {connectToDB} from '@/lib/db'
import {User} from '@/lib/models/models'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
    ) {
    if (req.method !== 'GET')
        return res.status(405).end('This end point expects GET requests only');

        try {
            await connectToDB();

            
            const { userId } = req.query;
            const user = await User.findById(userId);

            return res.status(200).json({
                success: true,
                user
            })

        } catch (error: any) {
            console.log(error)
            res.status(500).json({error: error.message ?? error})
        }

}