const express = require('express')
const cors = require('cors')
const connectDB = require('./database.js')
const {PORT} = require('./config.js')

const especialidadRoutes = require('./src/routes/especialidadRoutes.js');
const equipoRoutes = require('./src/routes/equipoRoutes.js');
const citaRoutes = require('./src/routes/citaRoutes.js');
const expedienteRoutes = require('./src/routes/expedienteRoutes.js');
const pacienteRoutes = require('./src/routes/pacienteRoutes.js');

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