import axios from 'axios';
import fs from 'fs';
import { countryListToTest } from './constants.js';
import path from 'path';

const checkFolderExist = async (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
};

const generateData = async (country, isGeoJson = false) => {
  const { name, code3 } = country;
  try {
    const start = Date.now();
    await axios(
      `https://apps.itos.uga.edu/CODV2API/api/v1/themes/cod-ab/locations/${code3}/versions/current/${
        isGeoJson ? 'geojson' : 'shp'
      }/0`
    );
    const finish = Date.now();
    const time = (finish - start) / 1000;
    return {
      Country: name,
      Code3: code3,
      'Is success?': true,
      Time: time,
    };
  } catch (e) {
    return {
      Country: name,
      Code3: code3,
      'Is success?': false,
      'Error message': e.message,
      Time: 0,
    };
  }
};

const generateReport = async (fileName, isGeoJson = false) => {
  const newCountryList = [];
  const countryListToTestLength = countryListToTest.length;
  let currentIndex = 0;
  for (let country of countryListToTest) {
    process.stdout.write('\r');
    const newData = await generateData(country, isGeoJson).then((data) => data);
    newCountryList.push(newData);
    process.stdout.write(
      Number(++currentIndex / (countryListToTestLength / 100)).toFixed(2) + '%'
    );
  }
  newCountryList.sort((a, b) => a.Time - b.Time);
  const output = newCountryList.map((each) => ({
    ...each,
    Time: each.Time ? each.Time + 's' : each.Time,
  }));
  await checkFolderExist('reports');
  fs.appendFileSync(path.resolve(fileName), JSON.stringify(output));
  process.stdout.write('\r');
};

const main = async () => {
  process.stdout.write(`Generating: reports/geojson-report.json`);
  process.stdout.write('\n');
  await generateReport(`./reports/geojson-report.json`, true);
  process.stdout.write('\r');
  process.stdout.write('\r');

  process.stdout.write(`Generating: reports/shape-report.json`);
  process.stdout.write('\n');
  await generateReport(`./reports/shape-report.json`, false);
  process.stdout.write('\r');
  process.stdout.write('\r');
};

main();
