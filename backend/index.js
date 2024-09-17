const express = require('express')
const app = express()
app.get('/',async(req,res)=>{
    console.log('the server is running')
    //cdconsole.log('the result is'+req.body.password)
    //let result= await infra1.find().exec()
    res.send("this is express is running")
    //console.warn(result)
});
const port=5001;
app.listen(port,()=>{
      console.log('the server is running on port500');
})