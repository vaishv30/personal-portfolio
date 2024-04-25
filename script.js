//header togglee
let MenuBtn= document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})



//typing effect
let typed = new Typed(' auto-input',{
    strings: ['Front-End Develpoer!','Freelancer!','UI Designer','YouTuber'],
    typeSpeed:100,
    backSpeed:100,
    backdelay:2000,
    loop: true,
})

//Active link state on scroll

//get all links
let navlinks= document.querySelectorAll('nav ul li a')
//get all sections
let sections = document.querySelectorAll('sections')

window.addEventListener('scroll',function (){
    const scrollPos = window.scrollY +20
    sections.forEach(section => {
       if(scrollPos > section.offsetTop && scrollPos < (section.offsetTOP +section.offsetheight)){
        navlinks.forEach(link => {
            link.classList.remove('active');
            if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                link.classList.add('active')
            }
        });
       }
    });
});