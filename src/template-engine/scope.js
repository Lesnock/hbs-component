// module.exports = `function run() {
//     let _state = {}

//     //->script

//     function render(state) {
//         document.getElementById(div).innerHTML = template(state)
//     }

//     function setState(value) {
//         if (typeof value !== 'object') {
//             return console.error('state should be a object type')
//         }

//         if (onUpdate) {
//             onUpdate(value, _state)
//         }

//         Object.keys(value).forEach(key => {
//             _state[key] = value[key]
//         })

//         render(_state)
//     }

//     if (onRender) {
//         onRender(_state)
//     }
// }

// run()`

module.exports = `function run() {
    let _state = {}

    //->script

    function render(state) {
        document.getElementById(div).innerHTML = template(state)
    }

    function setState(value) {
        if (typeof value !== 'object') {
            return console.error('state should be a object type')
        }

        if (onUpdate) {
            onUpdate(value, _state)
        }

        Object.keys(value).forEach(key => {
            _state[key] = value[key]
        })

        render(_state)
    }

    if (onRender) {
        onRender(_state)
    }
}

run()`