const loaded = async function() {
    destroyLoader()
    declareUsers()
}

const reduceNumber = function(num) {
    if (num<1000) return `${num}`
    if (num<1000000) return `${Math.floor(num/100)/10}K`
    if (num<1000000000) return `${Math.floor(num/100000)/10}M`
}

const declareUsers = function(){
    var users = []
/*
    [
        {
            'name': "abcd",
            'discriminator': 1234,
            'pfp': "https://discord.com/pfp.png",
            'xp': 120,
            'lvl': 1
        }
    ]
*/

    users = users.sort((x, y) => x.xp - y.xp).reverse();

    var cont = 0
    users.forEach(user=>{
        cont += 1
        let structure = `<div class="user"><div class="rank"><h3>${cont}º</h3></div><div class="identify"><img src="${user.pfp}" alt=""><div class="username"><h1>${user.name}</h1><h3>#${user.discriminator}</h3></div></div><div class="stats"><div><h1 class="userxp">${reduceNumber(user.xp)}</h1><h3>XP</h3></div><div><h1 class="userlevel">${user.lvl}</h1><h3>Nivel</h3></div></div></div>`
        document.querySelector(".lb-container").innerHTML += structure
    })

    destroyLoader()
}