import multer from "multer";

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./public/avatar")
    },
    filename:function(req,file,cb){
       const fileName = new Date().toISOString().replace(/:/g, '_') + file.originalname
        cb(null, file.fieldname + '-' + fileName)
    },
})

const uploadFile = multer({
    storage
})

export default uploadFile;
