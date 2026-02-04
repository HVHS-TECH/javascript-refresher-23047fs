let header;

function headerButton() {
    header=document.getElementById("test")
    console.log("headerButton")
}

function alertButton() {
    //alert("Congratulations!\nYou got the script running.")
    document.getElementById("welcomeMessage").innerHTML=header
    console.log("alertButton")
}
