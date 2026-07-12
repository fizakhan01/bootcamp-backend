import User from "../model/user.js";

const createUser = async (req,res)=>{
    try{
        const{name,email,empId}=req.body;

        console.log(name,email,empId);
        
        if(!name|| !email||!empId){
            return res.status(404).json({
                message:'data not found'
            })
        }

        const user= await User.create ({name,email,empId})
        console.log(user);

        // send response to user

        res.status(200).json({
            success:true,
            user,
            message:'data created successfully',
        })


    }catch(error){
        res.status(404).json({
            success:false,
            message:"data not created",error
        })
    }
}

export {createUser}