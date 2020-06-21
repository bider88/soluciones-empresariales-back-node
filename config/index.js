// Port
process.env.PORT = process.env.PORT || 3000;

// Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Expiration token
process.env.EXP_TOKEN = '2d';

// SEED authentication
process.env.SEED = process.env.SEED || 'seed-dev';

// Database
const urlDB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/soluciones_empresariales' : process.env.MONGO_URI;

process.env.URLDB = urlDB;

// origin
process.env.ORIGIN = process.env.NODE_ENV === 'dev' ? 'http://localhost:4200' : process.env.ORIGIN_URL;