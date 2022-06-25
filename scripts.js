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