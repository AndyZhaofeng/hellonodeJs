function Pet(words){
    this.words=words
    this.barks=function(){
        console.log(" barks "+this.words)
    }
}
function Dog(words){
    Pet.call(this,words)
}

var dog=new Dog('wangwangwang');
dog.barks();
var pet=new Pet("jijiji");
pet.barks();
