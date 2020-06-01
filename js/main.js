(function () {

    const mobiles = document.querySelectorAll('.mobile-inertia')

    window.onscroll = () => {

        winScroll = window.scrollY

        const scrollButtons = document.querySelectorAll('.transicion');
        for (let elm of scrollButtons) {
            elm.onclick = e => {
                e.preventDefault()
                const href = elm.getAttribute('href');
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

        if (isInViewport(document.querySelector('.features'))) {
            mobiles[0].style.transform = `translateX(${mobiles[0].getBoundingClientRect().top * .3}px)`
            mobiles[1].style.transform = `translateX(${mobiles[1].getBoundingClientRect().top * .2}px)`
        }
    }
    const isInViewport = el => {
        const rect = el.getBoundingClientRect()
        const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
        const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
        return (vertInView && horInView)
    }

})();