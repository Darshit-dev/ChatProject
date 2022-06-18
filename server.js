const express = require('express');
const app = express();
//const http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})



app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});

