const fs = require('fs')

require('dotenv').config()

let apiURL = process.env.API_URL;

const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = { 
    production: true, 
    apiUrl: '${apiURL}'
};`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
})
