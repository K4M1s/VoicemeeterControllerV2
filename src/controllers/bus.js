const { BusProperties } = require("voicemeeter-connector");

async function getBusData(id) {
    const data = {
        id: id,
        data: {
            Gain: await global.vm.getBusParameter(id, BusProperties.Gain),
            Mono: await global.vm.getBusParameter(id, BusProperties.Mono),
            EQ: await global.vm.getBusParameter(id, BusProperties.EQ),
            Mute: await global.vm.getBusParameter(id, BusProperties.Mute),
        }
    }

    return data;
}

async function setBusData(id, data) {
    typeof data.Gain !== "undefined" ? await global.vm.setBusParameter(id, BusProperties.Gain, data.Gain) : null;
    typeof data.Mono !== "undefined" ? await global.vm.setBusParameter(id, BusProperties.Mono, data.Mono) : null;
    typeof data.EQ !== "undefined" ? await global.vm.setBusParameter(id, BusProperties.EQ, data.EQ) : null;
    typeof data.Mute !== "undefined" ? await global.vm.setBusParameter(id, BusProperties.Mute, data.Mute) : null;
}

const actions = {
    get: async function(req, res) {
        
        const {id} = req.params;        
        const data = [];

        if (typeof id === "undefined" || isNaN(id)) {
            for(let i=0; i<5; i++) {
                data.push(await getBusData(i));
            }
        } else {
            data.push(await getBusData(Number(id)));
        }
        
        res.json(data);
    },
    put: async function(req, res) {

        const {id} = req.params;
        const {data} = req.body;

        if (!id || isNaN(id) || !data) {
            return res.status(400).send();
        }
        await setBusData(id, data);
        const newData = await getBusData(id);
        res.json(newData);
    }
}

module.exports = actions;