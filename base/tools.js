function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

const url = {
    complete: window.location.href,
    obtenerData() {
        try {
            const scopes = this.complete.split("?")[1].split("&")
            var new_scopes = []
            scopes.forEach(scope => {
                new_scopes.push({name: scope.split("=")[0], value: scope.split("=")[1].split(";") })
            })
            return new_scopes
        } catch {
            return []
        }
    },
    añadirData(parent, value, scopes) {
        scopes = scopes || this.obtenerData()
        if (this.exist(parent)){
            for (var i = 0;i<scopes.length;i++) {
                if (scopes[i].name == parent) {
                    if (value && value!=null && value!="") {
                        scopes[i].value.push(value)
                    } else {
                        if (typeof value != "object") {
                            scopes[i].value = [value]
                        } else {
                            scopes[i].value = value
                        }
                    }
                }
            }
        } else {
            return this.establecerData(parent, value, scopes)
        }
        return this.apply(scopes)
    },
    eliminarData(parent, value, scopes) {
        scopes = scopes || this.obtenerData()
        for (var i = 0;i<scopes.length;i++) {
            if (scopes[i].name == parent) {
                if (value && value!=null && value!="" && scopes[i].value.length>1) {
                    var newArray = []
                    for (var x = 0;i<scopes[i].value.length;i++) {
                        if (scopes[i].value[x] != value) {
                            newArray.push(value)
                        }
                    }
                    scopes[i].value = newArray
                } else {
                    scopes[i] = undefined
                }
            }
        }
        return this.apply(scopes)
    },
    establecerData(parent, value, scopes) {
        scopes = scopes || this.obtenerData()
        if (typeof value != "object") {
            value = [value]
        }
        if (this.exist(parent)) {
            for (var i = 0;i<scopes.length;i++) {
                if (scopes[i].name == parent) {
                    scopes[i].value = value
                }
            }
        } else {
            scopes[scopes.length] = {name: parent, value: value}
        }
        console.log(scopes)
        return this.apply(scopes)
    },
    obtener() {
        try {
            return this.complete.split("?")[0]
        } catch {
            return this.complete
        }
    },
    apply(scopes) {
        scopes = scopes || this.obtenerData()
        var toShow = []
        for (var i = 0;i<scopes.length;i++) if (scopes[i]) toShow.push(`${scopes[i].name}=${scopes[i].value.join(";")}`)
        return window.location.href = `${this.obtener().endsWith("/")?this.obtener():`${this.obtener()}/`}?${toShow.join("&")}`
    },
    exist(parent, scopes) {
        scopes = scopes || this.obtenerData()
        if (scopes==undefined) return false
        for (var i = 0;i<scopes.length;i++) {
            if (scopes[i].name == parent) return true
        }
        return false
    },
    has(parent, value, scopes) {
        if (! this.exist(parent)) return false
        scopes = scopes || this.obtenerData()
        for (var i = 0;i<scopes.length;i++) {
            if (scopes[i].name == parent) {
                values = scopes[i].value
                return values.includes(value.toLowerCase())
            }
        }
        return false
    }
}