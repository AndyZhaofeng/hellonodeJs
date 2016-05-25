function show(text){
    console.log(text)
}
function process(callback,text){
    text += ' superb'
    show(text)
}

process(show,'zhaofeng')