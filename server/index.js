require('dotenv').config();
const express = require ('express');
const massive = require ('massive');
const app = express();
// App.request(express.json);


//DOTENV
const{SERVER_PORT, CONNECTION_STRING} = process.env
//BRING FUNCTIONS FROM CONTROLLER FILE
const {getProduct} = require('./controller');

//DB CONNECTION
massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('DB connected');
})
.catch(res => console.log(res))

//USE REQ, RES
app.use(express.json());

//ENDPOINTS
//GET
app.get('/api/product', getProduct);

//POST

//PUT

//DELETE


//LISTEN
app.listen(SERVER_PORT, () => console.log('Bat is Back'));