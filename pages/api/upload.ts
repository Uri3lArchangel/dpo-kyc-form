// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { uploadData } from '../../src/utils/PostHelper'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
 await uploadData(req,res)
  res.status(201).json({ message: 'success' })
  }catch(err){
    console.error(err)
    res.status(500).json({ message: 'failed' })
    
  }
}
