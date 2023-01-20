const express = require('express');
const path = require('path');

const app = express();
const appName = 'bea-frontend';
app.use(express.static(`${__dirname}/dist/${appName}`));
app.get('/*', function(req, res) {
    console.log(req);
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 4200);