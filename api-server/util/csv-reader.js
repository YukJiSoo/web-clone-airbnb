// Execute command
// node ./api-server/util/csv-reader.js room_data.csv
import csv from 'csv-parser';
import fs from 'fs';

export default async filePath => {
    return new Promise((resolve, reject) => {
        console.log(filePath);
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', data => results.push(data))
            .on('end', () => {
                resolve(results);
            });
    });
};
