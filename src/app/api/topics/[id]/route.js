import connectMongoDb from "@/libs/mongodb";
import Topics from "@/models/topics";
import { NextResponse } from "next/server";

export const PUT= async (request,{params})=>{
    const {id}=params;
    const {newTitle:title,newDescription:description}= await request.json()
    await connectMongoDb();
    await Topics.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({
        message:'Topic Updated Successfully'
    },{status:'200'})
}
export const GET= async (request,{params})=>{
    const {id}=params;
    await connectMongoDb()
   const topic= await Topics.findOne({_id:id})
   return NextResponse.json({
    topic
   },{status:'200'})
}