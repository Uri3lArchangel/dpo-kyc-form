// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { uplaodData } from '../../src/utils/PostHelper'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
 await uplaodData(req)
  res.status(201).json({ message: 'success' })
  }catch(err){
    res.status(200).json({ message: 'failed' })

  }
}
