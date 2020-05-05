var fs = require('fs');

// method appendFile() create new file with content
// fs.appendFile('text.txt', 'Hello Content', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// method open() create new file
// fs.open('text2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// method writeFile() replace file and content if file exists, if file not exists create new file with content
fs.writeFile('text1.txt', 'Hello Replace', function (err) {
    if (err) throw err;
    console.log('Saved!');
});