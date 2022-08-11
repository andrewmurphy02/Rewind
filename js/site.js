//Get the string from the page
//Controller function
function getString(){
    //Makes the alert invisible when it starts
    document.getElementById("alert").classList.add("invisible");
    //Gets the input string. userString can be an array
    let userString = document.getElementById("userString").value;
    //Gets the reversed string from reverseString() function
    let revString = reverseString(userString);
    //Displays the reversed string
    displayString(revString);
}
//Reverse the string
//Logic function
function reverseString(userString){
    let revString = [];
    //Reverse a string using a for loop
    //Length-1 because if name is Sam the name is 3 long but last index is 2
    for (let i = userString.length-1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}
//Display the reversed string to the user
//View function
function displayString(revString){
    //Write to page
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revString}`;
    //Show alert box
    document.getElementById("alert").classList.remove("invisible");
}