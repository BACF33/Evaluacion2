const express = require('express')
const cors = ('cors')
const connectDB = ('./database.js')
const {PORT} = ('./config.js')

const especialidadRoutes = require('./src/routes/especialidadRoutes');
const equipoRoutes = require('./src/routes/equipoRoutes');
const citaRoutes = require('./src/routes/citaRoutes');
const expedienteRoutes = require('./src/routes/expedienteRoutes');
app.use('/api', pacienteRoutes);

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/especialidad', especialidadRoutes);
app.use('/api/equipo', equipoRoutes);
app.use('/api/cita', citaRoutes);
app.use('/api/expediente', expedienteRoutes);
app.use('/api', pacienteRoutes);

connectDB().then(() => 
{
    app.listen(PORT, () => {
        console.log('Servidor corriendo');
    })
});