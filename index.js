const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
app.get('/setCookie',(req,res)=>{
    res.cookie('name','SecFB',{maxAge:1000*60*60*24},{httpOnly:true},{secure:false});
    res.send('cookie set successfully');
});

app.get('/getCookie',(req,res)=>{
    const data=req.cookies.name;
    if(data){
        res.send(`cookie value: ${data}`);
    }else{
        res.send('set a cookie first');
}});

app.get('/deleteCookie',(req,res)=>{
    res.clearCookie('name');
    res.send('cookie deleted successfully');
});

app.listen(3000,()=>{
    console.log('server started');
});