const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname)

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app
    win.loadFile('src/index.html')

    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)