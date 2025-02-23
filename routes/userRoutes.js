// Routing refers to how an application's endpoints (URIs) 
// respond to client requests. You define routing using methods of the Express 
// app object that correspond ...

import express from 'express';

const router=express.Router();

router.get("/check-auth",(req,res)=>{
    if(req.oidc.isAuthenticated()){
        return res.status(200).json({
            isAuthenticated:true,
            user:req.oidc.user,
         });
    }else{
        return res.status(200).json(false);
           
    }
});
export default router;
