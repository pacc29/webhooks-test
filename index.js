const express = require("express");
const ngrok = require('@ngrok/ngrok');
const app = express();
const port = 3000;

app.use(express.json());

let events = [];

app.post("/hook", (req, res) => {
  console.log("Evento capturado de Github WebHook");
  events.push(req.body);
  return res.status(200).end();
});

app.get("/events", (req, res) => {
  return res.json(events).status(200);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
}); 

ngrok.connect({ addr: port, authtoken_from_env: true })
.then(listener => console.log(`Ingress established at: ${listener.url()}`));

//