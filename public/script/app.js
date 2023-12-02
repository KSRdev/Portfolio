$(function() {
        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        $(window).scroll(async() => {
            const scrollY = $(window).scrollTop();
    
            $("section").each(async(idx) => {
                let current = $("section")[idx];
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.attributes.id.nodeValue;
    
    
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    $('.nav__menu a[href*=' + sectionId + ']').addClass('active-link');
                    return false;
                } else {
                    $('.nav__menu a[href*=' + sectionId + ']').removeClass('active-link');
                }
            });
        });
    });
console.log("Hello, World!")
