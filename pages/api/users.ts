import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body

    try {
      const newUser = await prisma.user.create({
        data: { name, email }
      })

      res.status(201).json(newUser)
    } catch (error) {
     res.status(500).json({ error: 'Failed to create user' })
    }

  } else if (req.method === 'GET') {
    const users = await prisma.user.findMany()
    res.status(200).json(users)

  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
