import mongoose from 'mongoose'
import config from '../config.js';

// export const mongoDBConnection = async () => {
//     const db = await mongoose.connect(config.mongodbURL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to database:", db.connection.name); 
// }

(async () => {
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to database:", db.connection.name);
})();