// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName('LI'), i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('SPAN'),
        txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closes = document.getElementsByClassName('close'), i;
for (i = 0; i < closes.length; i++) {
   closes[i].onclick = function() {
       var element = this.parentElement;
       element.style.display = 'none';
   }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false)

// Create a new list-item when clicking on the "Add" button
function newElement() {
    var li = document.createElement('LI'),
        inputValue = document.getElementById('myInput').value,
        t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert('You must write something!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement('SPAN'),
        txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < closes.length; i++) {
        closes[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
