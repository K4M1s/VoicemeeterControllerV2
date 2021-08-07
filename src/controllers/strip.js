const { StripProperties } = require("voicemeeter-connector");

async function getStripData(id) {
    const data = {
        id: id,
        data: {
            Gain: await global.vm.getStripParameter(id, StripProperties.Gain),
            Comp: await global.vm.getStripParameter(id, StripProperties.Comp),
            Gate: await global.vm.getStripParameter(id, StripProperties.Gate),
            EqGain1: await global.vm.getStripParameter(id, StripProperties.EqGain1),
            EqGain2: await global.vm.getStripParameter(id, StripProperties.EqGain2),
            EqGain3: await global.vm.getStripParameter(id, StripProperties.EqGain3),
            A1: await global.vm.getStripParameter(id, StripProperties.A1),
            A2: await global.vm.getStripParameter(id, StripProperties.A2),
            A3: await global.vm.getStripParameter(id, StripProperties.A3),
            B1: await global.vm.getStripParameter(id, StripProperties.B1),
            B2: await global.vm.getStripParameter(id, StripProperties.B2),
            Mono: await global.vm.getStripParameter(id, StripProperties.Mono),
            Solo: await global.vm.getStripParameter(id, StripProperties.Solo),
            Mute: await global.vm.getStripParameter(id, StripProperties.Mute)
        }
    }

    return data;
}

async function setStripData(id, data) {
    typeof data.Gain !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.Gain, data.Gain) : null;
    typeof data.Comp !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.Comp, data.Comp) : null;
    typeof data.Gate !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.Gate, data.Gate) : null;
    typeof data.A1 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.A1, data.A1) : null;
    typeof data.A2 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.A2, data.A2) : null;
    typeof data.A3 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.A3, data.A3) : null;
    typeof data.B1 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.B1, data.B1) : null;
    typeof data.B2 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.B2, data.B2) : null;
    typeof data.EqGain1 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.EqGain1, data.EqGain1) : null;
    typeof data.EqGain2 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.EqGain2, data.EqGain2) : null;
    typeof data.EqGain3 !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.EqGain3, data.EqGain3) : null;
    typeof data.Mono !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.Mono, data.Mono) : null;
    typeof data.Solo !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.Solo, data.Solo) : null;
    typeof data.Mute !== "undefined" ? await global.vm.setStripParameter(id, StripProperties.Mute, data.Mute) : null;
}

const actions = {
    get: async function(req, res) {

        const {id} = req.params;  
        const data = [];

        if (typeof id === "undefined" || isNaN(id)) {
            for(let i=0; i<5; i++) {
                data.push(await getStripData(i));
            }
        } else {
            data.push(await getStripData(Number(id)));
        }
        res.json(data);
    },
    put: async function(req, res) {

        const {id} = req.params;
        const {data} = req.body;

        if (!id || isNaN(id) || !data) {
            return res.status(400).send();
        }
        await setStripData(id, data);
        const newData = await getStripData(id);
        res.json(newData);
    }
}

module.exports = actions;