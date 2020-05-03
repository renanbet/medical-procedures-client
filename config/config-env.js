const fs = require('fs')

let apiURL = process.env.API_URL;
console.log('API_URL', apiURL)

let targetPath = `./src/environments/environment.ts`;
let envConfigFile = `
export const environment = { 
    production: false, 
    apiUrl: '${apiURL}'
};`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
})

targetPath = `./src/environments/environment.prod.ts`;
envConfigFile = `
export const environment = { 
    production: true, 
    apiUrl: '${apiURL}'
};`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
})
