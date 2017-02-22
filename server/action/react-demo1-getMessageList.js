var getMessageList = require('../../test/react-demo1-MessageList.js');

exports.excute = function(req, res) {
    getMessageList.getMessageList(function(data) {
        res.send(data);
    })
}