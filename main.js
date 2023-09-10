window.onload = function(){
    headerPositionAnimation();
    aboutMeTabClickEvent();
}

function headerPositionAnimation() {
    var typed = new Typed(".header-text-position", {
        strings: ['Software Developer', 'Web Developer'],
        typeSpeed: 50,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay:1000,
        loop:true
        });
}

function aboutMeTabClickEvent(){
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            tabLinks.forEach(link => {
                link.classList.remove('active');
            })

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active-tab');
            });

            link.classList.add('active');
            tabContents[index].classList.add('active-tab');
        })
    })
}