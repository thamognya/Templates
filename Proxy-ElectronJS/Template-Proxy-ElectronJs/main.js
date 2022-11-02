const ProxyList = require('free-proxy')
const proxyList = new ProxyList()

const { app, BrowserWindow } = require('electron')
const path = require('path')

proxyList
    .randomByProtocol('https')
    .then(function (data) {
        function createWindow() {
            const mainWindow = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    preload: path.join(__dirname, 'preload.js')
                }
            })
            mainWindow.webContents.session
                .setProxy({
                    proxyRules:
                        data['protocol'] +
                        '://' +
                        data['ip'] +
                        ':' +
                        data['port']
                })
                .then(() => {
                    mainWindow.loadURL('https://whatismyipaddress.com/')
                })
                .catch(err => console.error(err))
        }
        app.whenReady().then(() => {
            createWindow()
            app.on('activate', function () {
                if (BrowserWindow.getAllWindows().length === 0) createWindow()
            })
        })
        app.on('window-all-closed', function () {
            if (process.platform !== 'darwin') app.quit()
        })
    })
    .catch(function (error) {
        throw new Error(error)
    })
