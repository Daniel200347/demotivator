const fs = require('fs');
let result = ""
fs.readdir('./assets/fonts', (err, files) => {
    files.forEach(file => {
        const fontName = file.replace('.ttf', "")
        result += `@font-face {
             font-family: "${fontName}";
             src: url("/assets/fonts/${file}") format("truetype");
        }\n`
    });
    fs.writeFile('./fonts.css', result, () => { })
});