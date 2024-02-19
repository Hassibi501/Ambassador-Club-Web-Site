

function closePopup(){
    overlay.style.display = "none";
    popup.remove();
}


var overlay = document.getElementById("overlay");
var popup = document.createElement('div');
var btn = document.createElement("button");
var span = document.createElement('span')
var overlay = document.createElement('div')
span.innerHTML = `
<h2>THIS IS THE HEADER</h2>
<p>THIS IS THE STUFF THAT GOES IN THE POPUP</p>
<a href="link goes here">LINK</a>
`;


overlay.id = "overlay";
overlay.style.display = "block";

btn.onclick = function() { closePopup() }
btn.innerHTML = "X"


popup.appendChild(btn);
popup.appendChild(span);
popup.id = 'popup';

//popup.innerHTML += '<span>Test</span>';
document.body.appendChild(overlay);

document.body.appendChild(popup);


