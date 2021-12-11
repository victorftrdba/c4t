let actings = document.querySelectorAll('.arrow-hover-effect')

for (let acting of actings) {
    acting.addEventListener('mouseover', function () {
        this.style.fontWeight = 'bold'
        this.style.cursor = 'pointer'
    })

    acting.addEventListener('mouseleave', function () {
        this.style.fontWeight = 'normal'
    })
}

let workers = document.querySelectorAll('.worker-info')

for (let worker of workers) {
    worker.addEventListener('mouseover', function () {
        this.style.opacity = '0.7'
    })

    worker.addEventListener('mouseleave', function () {
        this.style.opacity = '0'
    })
}

let galleries = document.querySelectorAll('.gallery-info')

for (let gallery of galleries) {
    gallery.addEventListener('mouseover', function () {
        this.style.opacity = '0.7'
    })

    gallery.addEventListener('mouseleave', function () {
        this.style.opacity = '0'
    })
}

function hiddenOffcanvas() {
    document.querySelector('.modal-backdrop').style.display = 'none'
    document.querySelector('.offcanvas').style.visibility = 'hidden'
}

AOS.init();