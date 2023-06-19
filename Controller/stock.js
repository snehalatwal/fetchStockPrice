require('dotenv').config();
const axios=require("axios").default;


function handleStaticRequest(req,res){
    res.render('index');
}
async function handleStockResponse(req,res){

   const stockSelected=req.body.stockPrices;
   console.log(stockSelected);
   const options={
    method:"get",
    url:'https://latest-stock-price.p.rapidapi.com/price',
    params:{
        Indices: 'NIFTY 50'
    },
    headers:{

        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
   };

   try{
     const response= await axios.request(options);
     const stockResponse=response.data;
     for(let i=0; i<stockResponse.length; i++){
        if(stockResponse[i].symbol===stockSelected){

            let stockdetail=stockResponse[i];
            
            res.send("<html><body> <h2><strong> " + stockdetail.symbol + "</strong></h2>"+
            "<h2> Open: " + stockdetail.open + "</h2>" +
            "<h2> Day High: "+ stockdetail.dayHigh + "</h2>" +
            "<h2> Day Low: "+ stockdetail.dayLow + "</h2>" +
            "<h2> Last Price: "+ stockdetail.lastPrice + "</h2>" +
            "<h2> Previous Close: "+ stockdetail.previousClose + "</h2>" +
            "<h2> Year Low: "+ stockdetail.yearHigh + "</h2>" +
            "<h2> Year Low: "+ stockdetail.yearLow + "</h2>" +
            "<h2> Last Update Time: "+ stockdetail.lastUpdateTime + "</h2>" +

            "</body></html>")

        };
     };
     console.log(response.data);
   }
   catch(error){
        console.log(error);
   }
//    res.send("working as expected");
};

module.exports={
    handleStockResponse,
    handleStaticRequest
};