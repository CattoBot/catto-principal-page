var spinCount = 0
var spinin = false
var spined = false
var angle = 0
var actualPage = 1

function loaded() {
    recalcCattoLogo()
    destroyLoader()
    window.addEventListener("scroll", scrollingscrolling)
    document.getElementById("cattoLogo").addEventListener("click", clickToSpin)
}

function scrollingscrolling(e) {
    recalcCattoLogo()
}

function recalcCattoLogo() {
    let factor = -(document.getElementById("cattoLogo").getBoundingClientRect().top + window.innerHeight*0.25)/875
    if (factor>=1) factor = 1
    if (factor<=0) factor = 0
    if (!spinin) document.getElementById("presentation").style.opacity = `${1-factor}`
    if (!spined) document.getElementById("cattoLogo").style.transform = `rotateX(${factor*00}deg) rotateY(${factor*00}deg) rotateZ(${factor*15}deg)`
    if (factor==1) {
        document.getElementById("body").style.background = "#191919"
    } else {
        document.getElementById("body").style.background = "#000"
    }
}

function clickToSpin() {
    spinCount++
    if (spinCount<15) {
        console.log("CLICK MORE!")
    } else if (spinCount>20) {
        spinCount = 0
        spinin = false
    }
    if (spinCount>=15 && !spinin) spin()
}

async function spin() {
    spinin = true
    spined = true
    while (spinCount>=15) {
        angle++
        await sleep(1)
        document.getElementById("cattoLogo").style.transform = "rotateZ("+angle+"deg)"
    }
}

function sliderScrollTo(page){
    document.getElementById(`page${page}`).scrollIntoView();
    actualPage = page
}

function sliderScrollBy(page){
    actualPage += page
    if (actualPage>4) actualPage = 1
    if (actualPage<1) actualPage = 4
    document.getElementById(`page${actualPage}`).scrollIntoView();
}