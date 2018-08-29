const express = require('express'); 
const { json} = require('body-parser'); 
const app = express(); 
const port = 3001; 
const messages_controller = require('./controllers/messages_controller');


app.use(json()); 
// app.use( express.static( __dirname + '/../public/build' ) );


app.get('/api/messages', messages_controller.read); 
app.post('/api/messages', messages_controller.create); 
app.put('/api/messages/:id', messages_controller.update); 
app.delete('/api/messages/:id', messages_controller.delete); 

app.listen(port, () => {console.log(`listening on port: ${port}`)});
