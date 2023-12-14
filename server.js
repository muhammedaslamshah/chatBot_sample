const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/sendMessage', (req, res) => {
    const userInput = req.body.message;
    // Add logic to process userInput and generate a response
    const botResponse = "I received your message: " + userInput;
    res.json({ message: botResponse });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
