function validate() {

    var n1 = document.getElementById('name');
    var n2 = document.getElementById('email');
    var n3 = document.getElementById ('message');
    
    
    if(length(n1.value) < 4) {
        alert("Please input a minimum of 4 characters in the name field!");
    if (length(n3.value) < 20) {
        alert("Please enter at least 20 characters in the Message box to continue")
    }
    return true;
    }
    
    alert("The values should be equal and not blank");
    return false;
}
