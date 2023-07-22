const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 


app.use(bodyParser.json());


app.get('/numbers', (req, res) => {
  const { url } = req.query;

  if (!url || url.length === 0) {
    return res.status(400).json({ error: 'No URLs provided in the query parameters.' });
  }

  
  const numbers = processUrls(url);

  res.json({ numbers });
});


function processUrls(urls) {
    const axios = require('axios');
const cheerio = require('cheerio');


async function processUrls(urls) {
  const numbers = [];

  for (const url of urls) {
    try {
      const response = await axios.get(url);
      const data = response.data;


      if (isJsonData(data)) {
        
        const jsonNumbers = extractNumbersFromJson(data);
        numbers.push(...jsonNumbers);
      } else {
   
        const htmlNumbers = extractNumbersFromHtml(data);
        numbers.push(...htmlNumbers);
      }
    } catch (error) {
      console.error(`Error fetching or parsing data from ${url}: ${error.message}`);
    }
  }

  return numbers;
}


function isJsonData(data) {
  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
}


function extractNumbersFromJson(data) {
 
  return [];
}

function extractNumbersFromHtml(html) {
  const numbers = [];
  const $ = cheerio.load(html);

  
  return numbers;
}

  const numbers = [];



  return numbers;
}


app.listen(port, () => {
  console.log(`number-management-service is running on http://localhost:${port}`);
});
