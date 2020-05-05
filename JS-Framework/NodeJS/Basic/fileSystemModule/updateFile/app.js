var fs = require('fs');

// method appendFile() appends the specified content at the end of the specified file
fs.appendFile('text.txt', '\nHello Content', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// method writeFile() replace file and content if file exists, if file not exists create new file with content
fs.writeFile('text1.txt', 'Hello Replace', function (err) {
    if (err) throw err;
    console.log('Saved!');
});