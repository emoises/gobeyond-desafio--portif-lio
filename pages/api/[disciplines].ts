// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {data} from '../../services/portifolio'

interface QueryProps {
  disciplines: any;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const {disciplines} = req.query

  const posts = data.disciplines.filter( discipline => {
    if(discipline.title === 'React') {
      return true
    }else{
      return false
    }
  })
  res.status(200).json({ posts })
}