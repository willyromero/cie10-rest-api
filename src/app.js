import express from 'express';
import routesCie10 from '../src/routes/cie10.routes.js';
import routesHome from '../src/routes/home.routes.js';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(routesHome);
app.use(express.json());
app.use(routesCie10);

export default app;
