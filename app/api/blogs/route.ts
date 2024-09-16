import { NextResponse } from "next/server"
import { getPosts } from "@/lib/data";
import {addPost} from "@/lib/data";
export const GET=async (req:Request, res:Response)=>{
    try {
        const posts=getPosts();
        return NextResponse.json({message:'OK',posts},{status:200});
    } catch (err) {
        return NextResponse.json({message:'Error',err},
            {
                status:500,

            })
    }
}


export const POST=async (req:Request, res:Response)=>{
    const {title,desc}=await req.json();
    try {
        const post={title,desc,id:Math.random().toString(),date:new Date().toString()}
            addPost(post);
            return NextResponse.json({message:'OK',post},{status:201});
    } catch (err) {
        return NextResponse.json({message:'Error',err},
            {
                status:500,

            })
    }
    }