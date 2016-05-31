var fs=require('fs');

fs.readFile('bd_logo1.png',function(err,origin_buffer){
            console.log(Buffer.isBuffer(origin_buffer));
            
            fs.writeFile('bd_logo1.png',origin_buffer,function(err){
                         if(err) console.log(err);
                         })
            
            var base64Image=origin_buffer.toString('base64');
            console.log(base64Image);
            
            var decodeImage=new Buffer(base64Image,'base64');
            
            console.log(Buffer.compare(origin_buffer,decodeImage));
            
            fs.writeFile('bd_logo2.png',decodeImage,function(err){
                         if(err) console.log(err);
                         })
            })