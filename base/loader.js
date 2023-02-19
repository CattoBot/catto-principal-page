const loader ='<div class="colored"><div class="banter-loader"><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div><div class="banter-loader__box"></div>  <div class="banter-loader__box"></div></div></div>'

function showLoader(elementQuery) {
    elementQuery = elementQuery||"body"
    document.querySelector(elementQuery).innerHTML += `<div class="loader-background${elementQuery=="body"?"":" sticky"}">${loader}</div>`
}

function destroyLoader() {
    let node = document.querySelector(".loader-background");
    node.parentNode.removeChild(node);
}