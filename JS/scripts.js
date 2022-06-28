function submit(){
    if (confirm("Are you sure you want to submit? Click OK to confirm.") === true) {
        alert("You've submitted your service request form.")
    }
}

function exclude(item) {
    if (confirm("You've opted to exclude this item. Click OK to confirm.") === true) {
        document.getElementById(item).innerHTML = "";
    }
}

const before = "/donedirtcheapbytnt/IMAGES/before.png"
const after = "/donedirtcheapbytnt/IMAGES/after.png"
function change_image(id) {
    let newSource;
    if (document.getElementById(id).src === before) {newSource = after;}
    else if (document.getElementById(id).src === after) {newSource = before;}
    document.getElementById(id).src = newSource;
}