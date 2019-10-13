var express=require("express");
var app=express();
var request=require("request");

app.get("/",function(req,res){


res.send("Hii");

}).listen(8080)

app.get("/:name",function(req,res){
let name=req.params.name;
var url="https://api.openweathermap.org/data/2.5/weather?q="+name+"&APPID=b35975e18dc93725acb092f7272cc6b8&&units=metric";
console.log(url);
// console.log(url);

request(url,function(err,res,body){
if(!err && res.statusCode==200){
     
    var parsedData=JSON.parse(body);
    console.log("The weather in "+ name +" "+ parsedData.main.temp);
 }
else{
    console.log(err);
}

});
});


