const vmConnector = require('voicemeeter-connector');
const exitHook = require("exit-hook");

function voicemeeterConnect() {
    return new Promise(async (resolve, reject) => {
        const vm = await vmConnector.Voicemeeter.init();
        vm.connect();
        exitHook(() => {
            vm.disconnect();
        });
        global.vm = vm;
        resolve(vm);
    });
    
}

module.exports = voicemeeterConnect;