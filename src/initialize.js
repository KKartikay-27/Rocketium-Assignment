const fs = require('fs');
const path = require('path');

function initializeData() {
  const dataPath = path.join(__dirname, '../data/dummyData.json');

  if (!fs.existsSync(dataPath)) {
    console.error('Data file does not exist at:', dataPath);
    process.exit(1);
  }

  try {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const jsonData = JSON.parse(rawData);

    console.log('Data initialized successfully.');
    return jsonData;
  } catch (error) {
    console.error('Error reading or parsing data file:', error);
    process.exit(1);
  }
}

module.exports = initializeData;
