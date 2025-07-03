const axios = require("axios");

const fetchStockData = async (symbol) => {
    const apiKey = process.env.API_KEY
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${apiKey}`


    try {
        const response = await axios.get(url);
        const data = response.data();

        if (data.status === "error") {
            console.error("Error",data.message);
        }else {
            console.log("Stock Data" , data);
            return data;
        }

    } catch (e) {
       console.error("Axios error :" , error); 
    }

     
}

module.exports = fetchStockData;