import axios from 'axios';
import fs from 'fs';
import { countryListToTest } from './constants.js';
import { filePath } from './constants.js';

const generateData = async (country) => {
  const { name, code3 } = country;
  try {
    const start = Date.now();
    await axios(
      `https://apps.itos.uga.edu/CODV2API/api/v1/themes/cod-ab/locations/${code3}/versions/current/geoJson/0`
    );
    const finish = Date.now();
    const time = (finish - start) / 1000;
    return {
      country: name + ' - ' + code3,
      success: true,
      time: time,
    };
  } catch (e) {
    return { country: name, success: false, error: e.message, time: 0 };
  }
};

const main = async () => {
  const newCountryList = [];
  const countryListToTestLength = countryListToTest.length;
  let currentIndex = 0;
  for (let country of countryListToTest) {
    process.stdout.write('\r');
    const newData = await generateData(country).then((data) => data);
    newCountryList.push(newData);
    process.stdout.write(
      Number(++currentIndex / (countryListToTestLength / 100)).toFixed(2) + '%'
    );
  }
  newCountryList.sort((a, b) => a.time - b.time);
  const output = newCountryList.map((each) => ({
    ...each,
    time: each.time ? each.time + 's' : each.time,
  }));
  fs.appendFileSync(filePath, JSON.stringify(output));
};

main();
