var c=0;
function showC(){
    console.log(c);
}
function addC(callback){
    setTimeout(function(){
               c+=1;
               callback();
               },1000)
}
addC(showC)