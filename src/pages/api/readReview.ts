import {connectToDB} from '@/lib/db'
import {Review} from '@/lib/models/models'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
    ) {
    if (req.method !== 'GET')
        return res.status(405).end('This end point expects GET requests only');

        try {
            await connectToDB();

            
            const { reviewId } = req.query;
            const review = await Review.findById(reviewId);

            return res.status(200).json({
                success: true,
                review
            })

        } catch (error: any) {
            console.log(error)
            res.status(500).json({error: error.message ?? error})
        }

}