import { NextApiRequest } from "next";
import { connectMongo } from "./db/connectMongo";
import Investor from "./db/invesorModel";
import { formatDate } from "./helper/formatDate";

export const uplaodData = async(req:NextApiRequest)=>{
const {fname,lname,location,email,phone,wallet,plan,comapny}=req.body
await connectMongo()
console.log('creating...')
const today =new  Date()
let date =formatDate(today)
await Investor.create({Image:'',FirstName:fname,LastName:lname,Location:location,Email:email,PhoneNumber:phone,Plan:plan,Wallet:wallet,Company:comapny,Status:'pending',Date:date,Approvals:0,Rejections:0})
console.log('created')
}