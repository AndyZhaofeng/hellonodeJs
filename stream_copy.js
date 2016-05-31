var fs=require('fs');

var readStream=fs.createReadStream('bd_logo1.png');
var writeStream=fs.createWriteStream('stream_logo.png');

readStream.on('data',function(chunk){
      if(writeStream.write(chunk)==false){
      console.log('data in the cache');
      readStream.pause();
      }
});

readStream.on('end',function(){
      writeStream.end();
});

writeStream.on('drain',function(){
       console.log('data drains');
       readStream.resume();
});