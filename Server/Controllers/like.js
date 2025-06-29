import videofile from "../Models/videofile.js";
import mongoose from "mongoose";

export const likevideocontroller = async(req,res)=>{
    const {id:_id}=req.params
    const {Like}=res.body

    if (!mongoose.Types.ObjectId,isValid(_id)) {
        return res.status(404).send("video unavilable..")
    } 
    try {
        const updatelike=await videofile.findByIdAndUpdate(
            _id,{
                $set:{"Like":Like}
            }
        )
        res.status(200).json(updatelike)
    }catch(error){
        res.status(200).json("error",error)
    }
}