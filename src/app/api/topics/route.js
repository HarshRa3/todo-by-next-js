import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, description } = await request.json();
  await connectMongoDb();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: "Topic and description has been created" },
    { status: 200 }
  );
};
export const GET = async () => {
    await connectMongoDb();
    const topics= await Topic.find();
    return NextResponse.json({topics});
  };
  export const DELETE= async (request)=>{
    const id=request.nextUrl.searchParams.get('id')
    await connectMongoDb();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:'Topic deleted Successfully'},{status:'200'})
  }
