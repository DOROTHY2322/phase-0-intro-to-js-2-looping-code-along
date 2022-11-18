const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names,event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`);
}

console.log(writeCards(names, "surprise"));

function countDown(i) {
    var countDown = 10;

    for(i=0; i < 11; i++)
    console.log(countDown-i);
}
console.log(countDown)
    