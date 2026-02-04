
function headerButton() {
    const header=document.getElementById("test")
    const headerValue=header.value
    console.log("headerButton")
}

function alertButton() {
    //alert("Congratulations!\nYou got the script running.")
    document.getElementById("welcomeMessage").innerHTML=headerValue
    console.log("alertButton")
}
