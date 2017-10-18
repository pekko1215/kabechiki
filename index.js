var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    createTextWindow("test")
});

function createTextWindow(text){
    var win = new BrowserWindow({
        left: 0,
        top: 0,
        "transparent": true,    // ウィンドウの背景を透過
        "frame": false,     // 枠の無いウィンドウ
        "resizable": false,  // ウィンドウのリサイズを禁止
        'always-on-top': true
    })
    win.setIgnoreMouseEvents(true);
    win.maximize();
    win.loadURL('file://' + __dirname + '/index.html');
    win.setFullScreen(true);
    win.on('closed', function() {
        win = null;
    });
    // win.toggleDevTools()
    // win.togleDevelopperTools();
}
