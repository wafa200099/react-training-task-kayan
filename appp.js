const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
var request = require("request-promise");
var xml2js = require("xml2js");
//var parser = new xml2js.Parser();

//const db = require('./database')
//const pool = require('./database')
const port = 4000;

//var fs = require ('fs'), xml2js = require ('xml2js');

//var parser = new xml2js.Parser ();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/*var parseString = require('xml2js').parseString;
var xml = '`<request >${result.rows.request}</request>`';
parseString(xml, function (err, result) {
    console.dir(JSON.stringify(result));
});
*/
//const {DomParser} = require("xmldom");

app.post("/data", async (request, result) => {
  console.log("heeere");
  console.log(request.body);
  var parseString = require("xml2js").parseString;
  var xml = request.body.data;
  //var json={}

  //var xml=
  //xml to json
  //xml2js.parseString(xml,(err,result)=>{
  //if(err){
  // throw err;
  //}})

  // convert result to a json string
  //json=JSON.stringify(result,null,4);
  //console.log(json);

  const Pool = require("pg").Pool;
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "wafa3",
    password: "123w",
    port: 5432,
  });

  /*async function getDrugCode(drugCode) {
  const text = `SELECT drugCode FROM wafa WHERE drugCode = $1`;
  const values = [drugCode];
  return pool.query(text, values);
}

})*/
  async function myDisplay() {
    console.log("hhhhrgb");
    try {
      const client = await pool.connect();
      let result = client.query(
        "select * from wafa where  drugCode=$1 and  diseaseCode=$2  and type=$3;",
        [drugCode, diseaseCode, type]
      );
      console.log(result.rows);
    } catch (e) {
      console.log("Catch an error: ", e);
    } finally {
      client.release();
    }
    return result;
  }
});

/* let text = "<request id ='${result.rows.id}'>"+"<drug>${result.rows.drugCode}</drug>"+"<disease>${result.rows.diseaseCode}</disease>"+"<type>${result.rows.type}</ type>"+
"</request>";

result.rows.forEach(elem => {
console.log(elem);

})
*/

//xml to json

/*await pool.connect.then(async(client) => {

  console.log("heeeeeeeeeeeeeee");
  try{
let result = await client.query("select * from wafa where  drugCode=$1 and  diseaseCode=$2  and type=$3;",[ drugCode, diseaseCode,  type]);
console.log(result.rows);

let text = "<request id ='${result.rows.id}'>"+"<drug>${result.rows.drugCode}</drug>"+"<disease>${result.rows.diseaseCode}</disease>"+"<type>${result.rows.type}</ type>"+
"</request>";

result.rows.forEach(elem => {
console.log(elem);

})

  }
  catch(e) {
    console.log('Catch an error: ', e)
  }
finally {
  client.release()
}
return result;
}
)
async () => {
  const client = await pool.connect()
  try {
    const result = await client.query('select * from wafa where  drugCode=$1 and  diseaseCode=$2  and type=$3;',[ drugCode, diseaseCode,  type]);
    console.log(result.rows);
	
	const text = "<request id ='${result.rows.id}'>"+"<drug>${result.rows.drugCode}</drug>"+"<disease>${result.rows.diseaseCode}</disease>"+"<type>${result.rows.type}</ type>"+
  "</request>";
  
  result.rows.forEach(elem => {
  console.log(elem);
  
  })
  
  } 
  finally {
    
    client.release()
  }
  
})().catch(err => console.log(err.stack))
*/

/*await pool.connect.then(async(client) => {

    console.log("heeeeeeeeeeeeeee");
    try{
  let result = await client.query("select * from wafa where  drugCode=$1 and  diseaseCode=$2  and type=$3;",[ drugCode, diseaseCode,  type]);
  console.log(result.rows);
  
  let text = "<request id ='${result.rows.id}'>"+"<drug>${result.rows.drugCode}</drug>"+"<disease>${result.rows.diseaseCode}</disease>"+"<type>${result.rows.type}</ type>"+
  "</request>";
  
  result.rows.forEach(elem => {
  console.log(elem);
  
  })
  
    }
    catch(e) {
      console.log('Catch an error: ', e)
    }
 finally {
    client.release()
  }
  return result;
}
  )*/

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
