
const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = "";

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)



for (let i = 0; i < 10; i++) {
    document.write(i, '<br>');
}


//구구단
for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        document.write(`${i} X ${j} = ${i * j} <br>`);
    }
}