const express = require('express');
const { add, subtract, multiply, divide } = require('./calculator');

const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: add(a, b) });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: subtract(a, b) });
});

app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: multiply(a, b) });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    try {
        res.json({ result: divide(a, b) });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
