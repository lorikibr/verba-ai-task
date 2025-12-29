require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    
    // mock ai logic
    let botResponse = "I'm a mock assistant. Try asking about 'pricing' or say 'hello'!";
    
    if (message.toLowerCase().includes("hello")) {
        botResponse = "Hello! Welcome to Verba AI. How can I assist you today?";
    } else if (message.toLowerCase().includes("pricing")) {
        botResponse = "Our plans start at $10/month for basic support.";
    }

    // simulating ai thinking delay for the loading State bonus
    setTimeout(() => {
        res.json({ 
            response: botResponse, 
            timestamp: new Date().toISOString() 
        });
    }, 1200);
}); 

const PORT= process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));