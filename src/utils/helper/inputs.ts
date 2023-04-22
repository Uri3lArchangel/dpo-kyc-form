import axios from "axios"
import { formatDate } from "./formatDate"

export const postInputs = async(fname:string,lname:string,location:string,email:string,phone:string,wallet:string,plan:string,comapny?:string)=>{
 
    let data={
        fname,lname,location,email,phone,wallet,plan,comapny
    }
    console.log('posting')
   let res =  await axios.post('/api/upload',data)

   return res.data.message
}