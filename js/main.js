(function () {
    const mobiles = document.querySelectorAll('.mobile-inertia')
    window.onscroll = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            isInViewport(el) ? el.classList.add('visible') : el.classList.remove('visible')
        })
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