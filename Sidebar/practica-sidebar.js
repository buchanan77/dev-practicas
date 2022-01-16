const btnToggle = document.querySelector('.toggle-btn');
const btnClose = document.querySelector('.close-btn');

btnToggle.addEventListener('click', ()=>{
    const sidebar = document.querySelector('#sidebar').classList.toggle('active');
});

btnClose.addEventListener('click', ()=>{
    const sidebar = document.querySelector('#sidebar').classList.toggle('active')
});

