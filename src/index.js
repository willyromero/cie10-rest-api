import app from './app.js'
import './database.js'

async function main() {
    app.listen(app.get('port'));
    console.log("server on port: ", app.get('port'));
}

main();

