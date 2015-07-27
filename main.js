var application = require('app'),
    BrowserWindow = require('browser-window'),
    ipc = require('ipc');
application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center:true,
        title:"Electron IPC Demo",
    });
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    ipc.on('requestForCalculation',function(event,argument){
        var number1 = parseInt(argument.number1, 10),
            number2 = parseInt(argument.number2,10),
            operation = argument.operation,
            result = null;
        console.log(number1 + number2);
        switch(operation){
            case 'ADD':
                result = number1 + number2;
                break;
            case 'SUBSTRACT':
                result = number1 - number2;
                break
        }
        event.sender.send('responseFromCalculation', {output:result});
        console.log("hhhh",argument.number1);
    });
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});