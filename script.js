let numberCookies=0;

function cookieButton() {
    numberCookies=numberCookies+1
    document.getElementById("cookies").innerHTML=numberCookies
    console.log("Cookie Button has been pressed")
    console.log("Number of cookies is " + numberCookies)
}






let headerValue;

function headerButton() {
    header=document.getElementById("test")
    headerValue=header.value
    console.log("headerButton")
}