let header;
let headerValue;

function headerButton() {
    header=document.getElementById("test")
    headerValue=header.value
    console.log("headerButton")
}

function alertButton() {
    //alert("Congratulations!\nYou got the script running.")
    document.getElementById("welcomeMessage").innerHTML=headerValue
    console.log("alertButton")
}
