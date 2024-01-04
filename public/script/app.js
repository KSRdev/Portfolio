// $(function() {
//         /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
//         $(window).scroll(async() => {
//             const scrollY = $(window).scrollTop();
    
//             $("section").each(async(idx) => {
//                 let current = $("section")[idx];
//                 const sectionHeight = current.offsetHeight,
//                     sectionTop = current.offsetTop - 58,
//                     sectionId = current.attributes.id.nodeValue;
    
    
//                 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//                     $('.nav__menu a[href*=' + sectionId + ']').addClass('active-link');
//                     return false;
//                 } else {
//                     $('.nav__menu a[href*=' + sectionId + ']').removeClass('active-link');
//                 }
//             });
//         });
//     });
/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('active')
            t.classList.add('linkProject')
        })
        tab.classList.add('active');
        tab.classList.remove('linkProject');

    })
});


console.log("Hello, World!");