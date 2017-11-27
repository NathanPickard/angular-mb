var express = require('express');
var app = express();

var messages = [{ text: 'some text', owner: 'Nate' }, { text: 'other message', owner: 'Jane' }];

app.get('/messages', (req, res) => {
  res.json(messages);
})

app.listen(1234);