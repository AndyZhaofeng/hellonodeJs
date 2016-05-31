var fs=require('fs');

var readStream=fs.createReadStream('buffer_image.js');

var n=0;
readStream.on('data',function(chunk){
              ++n;
              console.log('data emits');
              console.log(Buffer.isBuffer(chunk));
//              console.log(chunk.toString('utf-8'));
              readStream.pause();
              console.log('data pause');
              setTimeout(function(){
                         console.log('data pause end');
                         readStream.resume();
                         },2000);
              
              })
            .on('readable',function(){
                console.log('data readable');
                })
            .on('end',function(){
                console.log('data end, n='+n);
                })
            .on('close',function(){
                console.log('data close');
                })
            .on('error',function(e){
                console.log('data read error'+e);
                })
