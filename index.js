const axios = require("axios");
const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("connected");
  ws.on("message", (message) => {
    if (message == "fetch-data") {
      const data = fetchData();
      ws.send(JSON.stringify({ value: data }));
    }
    if (message == "get-data") {
           axios
             .get("https://jsonplaceholder.typicode.com/todos/1")
                   .then((response) => {
                      ws.send(JSON.stringify(response?.data ));
             })
             .catch((error) => console.error(error));

     
    }
  });
});

function fetchData() {
  // Replace this with your data fetching code
  try {
    const data = "teddy ";
    return data;
  } catch (err) {
    console.log(err);
  }
}

const getData =  () => {
  const data = 
   axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response)
          .catch((err) => console.log(err.message));
        console.log("data is >>" , data)
  return data.data;
};

server.listen(8080, () => {
  console.log("WebSocket server listening on port 8080");
});
