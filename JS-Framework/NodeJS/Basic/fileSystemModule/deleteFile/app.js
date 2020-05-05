var fs = require('fs');

// method unlink() delete the specified file
fs.unlink('text.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted!');
});