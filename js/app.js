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