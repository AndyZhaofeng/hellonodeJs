var pet = {
    words:"jijiji",
    barks:function(voice){
        console.log(voice+" barks "+this.words)
    }
}

var dog={
    words:"wangwangwang"
}
pet.barks("chicken")
pet.barks.call(dog,"dog")