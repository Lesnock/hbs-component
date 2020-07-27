const scope = require('./scope')

class Compiler {
    render(file, div = 'root') {
        // Parse template file to a doc
        const parser = new DOMParser();
        const doc = parser.parseFromString(file, "text/html");

        // Tags
        const renderTag = doc.getElementsByTagName('render')[0].innerHTML
        const scriptTag = doc.getElementsByTagName('script')[0].innerHTML

        const runFn = scope.toString().replace('//->script', scriptTag)

        // Render just render tag with Handlebars
        const template = Handlebars.compile(renderTag)

        eval(runFn)
    }
}

module.exports = new Compiler