document.addEventListener('click', function (e) {
    let targetEl = e.target;


    if (targetEl.classList.contains('info-open')) {
        if (window.innerWidth <= 768) {
            targetEl.closest('.casino-card').classList.toggle('_active')
        } else {
            targetEl.closest('.casino-card').classList.add('_active')
        }
    }

    if (targetEl.classList.contains('info-close')) {
        targetEl.closest('.casino-card').classList.remove('_active')
    }
})