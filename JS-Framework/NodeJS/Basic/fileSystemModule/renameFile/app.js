var fs = require('fs');

// method rename the specified file
fs.rename('text3.txt', 'text.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});