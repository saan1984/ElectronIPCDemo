var ipc = require('ipc'),
    result = document.getElementById("result"),
    doOperation = function(opcode){
        var number1 = document.getElementById("number1"),
            number2 = document.getElementById("number2"),
            requestData = {
                "number1":number1.value,
                "number2":number2.value,
                "operation":opcode
            };
        ipc.send('requestForCalculation',requestData);
    }
ipc.on('responseFromCalculation',function(responseArgument){
    result.value = responseArgument.output;
});