const express = require("express"); 
const path = require("path"); 


const mainRouter = require('./src/routers/mainRouter.js')
const userRouter = require('./src/routers/userRouter.js');
const productRouter = require('./src/routers/productRouter.js')

const app = express ();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath) )

app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor escuchando en puerto ${port}`);
}); 

app.set('views', __dirname + '/src/views');

app.use(mainRouter);
app.use(userRouter);
app.use(productRouter);
