"use strict"
import multer from "multer"
const storage=multer.diskStorage({
    destination:(req,res)=>{
        cb(null,"uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,
            new Date().toISOString().replace(/:/g,"-")+file.originalname
        )
    },
})
const filefilter=(file,cb)=>{
    if (file.minetype==="video/mp4") {
        cb(null,true)
    } else {
        cb(null,true)
    }
}
const upload = multer({storage:storage,filefilter:filefilter})
export default upload