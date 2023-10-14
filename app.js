const contact = document.getElementById('contact');
contact.addEventListener("click",contactFunction);

function contactFunction(){
    window.location.href = 'contact.html';
}
   

const homePage = document.getElementById('home');
homePage.addEventListener('click', homeFunction);
function homeFunction(){
    window.location.href = 'index.html';
}
