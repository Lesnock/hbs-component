const Compiler = require(__dirname + '/template-engine/compiler')

class HBSComponent {
    renderFile = './render.hbs'

    load(path) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', path, false)
        xhr.send()
        return xhr.responseText
    }

    async render() {
        const renderFile = await this.load(this.renderFile)
        Compiler.render(renderFile)
    }
}

function loadComponent(path) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', path, false)
    xhr.send()
    return xhr.responseText
}

function renderComponent(component, div = 'root') {
    Compiler.render(component, div)
}