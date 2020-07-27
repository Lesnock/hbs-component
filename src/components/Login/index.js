const path = require('path')

const Input = require('../Login')

class Login extends HBSComponent {
    renderFile = path.resolve(__dirname, './render.hbs')

    state = {
        name: 'Caio Lesnock'
    }

    components = {
        Input
    }

    template() {
        this.load()
    }
}

module.exports = Login