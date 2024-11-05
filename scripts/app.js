const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
        } else {
            entry.target.classList.remove('appear')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal'); 
    for (var i = 0; i < reveals.length; i++) { 
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }


}
