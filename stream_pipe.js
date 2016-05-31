var http=require('http');
var fs=require('fs');
var request=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/request')

http.createServer(function(req,res){
      //1. 普通方法
//fs.readFile('bd_logo1.png',function(err,data){
//          if(err){
//          res.end('file not exist!');
//          }else{
//          res.writeHeader(200,{'Context-Type':'text/html'});
//          }
//});
  //2. 使用pipe
//      fs.createReadStream('bd_logo1.png').pipe(res);
                  request('http://www.qq.com/').pipe(res);
}).listen(8091);