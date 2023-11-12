import { getServerSession } from 'next-auth/next';
import {connectToDB} from '@/lib/db'
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/lib/auth';
import {User} from '@/lib/models/models'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  )
{}