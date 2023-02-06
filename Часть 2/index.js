function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    event.target.className = "trashfull";

    let data = event.dataTransfer.getData("text");
    let child = document.getElementById(data);
    let parent = child.parentNode;
    parent.removeChild(child);
}

function restore(event) {
    event.preventDefault();
    let img = document.createElement('img');
    img.src = "images/document.png";
    img.id = new Date().getTime();
    img.className ='document';
    img.draggable = true;
    img.addEventListener("dragstart", drag);
    document.getElementById('cont1').appendChild(img);
}
