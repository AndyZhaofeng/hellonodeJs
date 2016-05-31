var stream=require('stream');
var Readable=stream.Readable;
var Writable=stream.Writable;

var readStream=new Readable();
var writStream=new Writable();


readStream.push('Super ');
readStream.push('Zhao ');
readStream.push('feng.');
readStream.push(null);

writStream._write=function(chunk,encode,cb){
    console.log(chunk.toString());
    cb();
}
readStream.pipe(writStream);