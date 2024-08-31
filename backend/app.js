import express from "express";

// rutas
import router from "./routes/ProductRoutes.js";

const app = express();

app.use(express.json());

// cargar rutas
app.use('/api/', router)

export default app;