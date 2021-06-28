let count = 0;

let srcimage = document.getElementById("srcimage");
let nextbtn = document.getElementById("nextbtn");
let searchbtn = document.getElementById("searchbtn");
let search = document.getElementById("search");
let searchvalue = "dogs";

nextbtn.onclick = () => {changeImg();}
window.onload = () => {changeImg();}

function changeImg() {
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=nSvxmKDPwuT0KmKJvjz9ZCrnv1vTnazL&s="+searchvalue, {
        mode: "cors",
    }).then((result) => {
        return result.json();
    }).then((response) => {
        console.log(response);
        srcimage.src = response.data.images.original.url;
    }).catch((errormsg)=>{
        console.log(errormsg);
        alert("Sorry Error At Server Side")
    })
}

searchbtn.onclick = () => {
    searchvalue = search.value
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=nSvxmKDPwuT0KmKJvjz9ZCrnv1vTnazL&s=${searchvalue}`, {
        mode: "cors",
    }).then((result) => {
        return result.json();   
    }).then((response) => {
        console.log(response);
        srcimage.src = response.data.images.original.url;
    }).catch((errormsg)=>{
        console.log(errormsg);
        alert("Sorry Error At Server Side")
    })
}