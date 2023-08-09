const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#ccc",
        webPreferences: {      
            nodeIntegration: true, 
            contextIsolation: false, 
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
            
        }
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', () => { 
    createWindow();
})