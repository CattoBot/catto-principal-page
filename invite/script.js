function loaded() {
    destroyLoader()
    document.querySelector("#close").addEventListener("click", closeWindow)
    window.addEventListener('click', function (e) {
        if (!document.querySelector('.container').contains(e.target)) {
            closeWindow()
        }
    });
}

const invite = async function() {
    document.querySelector(".lateral-window").classList.remove("back")
    await sleep(300)
    document.querySelector(".lateral-window").classList.remove("back")
    document.querySelector(".lateral-window").classList.remove("out")
}

const closeWindow = async function() {
    document.querySelector(".lateral-window").classList.add("out")
    await sleep(200)
    document.querySelector(".lateral-window").classList.add("back")
}