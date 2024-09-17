const btn = document.querySelector('button');
const spanEle = document.getElementById('updateContent');

btn.onclick = function (){
    const yourName = prompt("Please enter your name")
    spanEle.textContent = yourName;
}