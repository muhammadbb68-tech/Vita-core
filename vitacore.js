const btn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("side-bar");
const backToTop = document.getElementById('backToTop');
btn.addEventListener("click", () => {
    btn.classList.toggle("dada");
});
btn.addEventListener('click', () => {
    sidebar.classList.toggle("mm")
})
document.querySelectorAll('a[href^="#').forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target =
        document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth'})
    })
})
window.onscroll = function(){
    if (window.scrollY > 100){
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
};
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});
backToTop.style.display = "none";