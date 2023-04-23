import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "./db/connectMongo";
import Investor from "./db/invesorModel";
import { formatDate } from "./helper/formatDate";

export const uploadData = async(req:NextApiRequest,res:NextApiResponse)=>{
const {fname,lname,location,email,phone,wallet,plan,comapny}=req.body
if(!fname || !lname || !location || !email || !phone || !wallet || !plan ){
 res.status(400).json({'message':'Invalid inputs'})
}
await connectMongo()
console.log('creating...')
const today =new  Date()
let date =formatDate(today)
await Investor.create({Image:'',FirstName:fname,LastName:lname,Location:location,Email:email,PhoneNumber:phone,Plan:plan,Wallet:wallet,Company:comapny,Status:'pending',Date:date,Approvals:0,Rejections:0})
console.log('created')
}