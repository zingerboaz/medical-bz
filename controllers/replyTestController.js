const replyTestSchema=require("../model/replyTestSchema.js")
express =require('express');

function replyTestController(){
    function createReplyTest(req, res) {
       
        if(req.body.roleNumber<200){
            return res.status(400).send({"msg":"You do not have permission"});
        }
    
    var newReplyTest=new replyTestSchema(req.body);
        newReplyTest.save(function(err,newDoc){
            
            if(err){
                
                    return res.status(400).send(err);
            }
            console.log("creat reply test work");
        res.status(200).send(newDoc);
        })
    }

    return{
        createReplyTest:createReplyTest
    }
}
module.exports=replyTestController()