const updateContent= document.querySelector('#random-number');
const btn = document.querySelector('#generate-btn');

btn.addEventListener('click',()=>{
    updateContent.classList.toggle('fadeIn');
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    updateContent.textContent = randomNumber;
})