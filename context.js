var pet={
    words:'halagoo',
    barks:function(){
        console.log(this.words)
        console.log(this===pet)
    }
}
pet.barks()

function PetFunction(barks){
    this.barks=barks
    this.voice=function(){
        console.log(this.barks)
        console.log(this)
    }
}
var dog=new PetFunction("WangWangWang");
dog.voice();
