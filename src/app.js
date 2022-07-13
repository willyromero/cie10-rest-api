import express, { json } from 'express';
import routesCie10 from '../src/routes/cie10.routes.js'
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json({message: "hi"})
});
app.use(express.json())
app.use(routesCie10)

export default app;
