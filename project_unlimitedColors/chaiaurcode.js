const randomColour = function(){
    const hex = '0123456789ABCDEF'; 
    let color = '#';
    let i = 0;
    while (i < 6){
        color += hex[Math.floor(Math.random()*16)]
        i++
    }
    return color

}
let interval
const startChanging = function(){
    interval = setInterval(changeBgColor, 1000, "hello")
}
const stopChanging = function(){
    clearInterval(interval)
}
document.querySelector('#start').addEventListener('click', startChanging)
document.query
