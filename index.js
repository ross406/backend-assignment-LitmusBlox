const csv = require('csv-parser');
const fs = require('fs');
const results = [];
const result = [];

fs.createReadStream('JavaProject.csv')
  .pipe(csv({}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // console.log(results);

    for (let i = 0; i < results.length; i++) {
      let obj = {};
      obj.STATUS = results[i].STATUS;
      obj.PRIORITY = results[i].PRIORITY;
      obj.DEADLINE = results[i].DEADLINE;
      obj['FIXED COST'] = results[i]['FIXED COST'];
      obj['ACTUAL HRS'] = results[i]['ACTUAL HRS'];
      // obj.TOTAL =
      //   parseInt(results[i]['FIXED COST'].slice(1).replace(",", "")) +
      //   parseInt(results[i]['ACTUAL HRS']);

      obj.TOTAL =
      parseInt(results[i]['FIXED COST'].replace("$", "").replace(",", "")) +
      parseInt(results[i]['ACTUAL HRS']);


      result.push(obj);
    }
    console.log(result);
  });
