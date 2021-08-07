const actions = {
    get: function(req, res) {
        res.json({type: global.vm.$type});
    }
};

module.exports = actions;