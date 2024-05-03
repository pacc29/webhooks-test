const ngrok = require('@ngrok/ngrok');
const port = 3000;


ngrok.connect({ addr: port, authtoken_from_env: true })
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));