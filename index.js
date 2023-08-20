const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const app = express();
const dataFilePath = path.join(__dirname, 'data.json');
app.use(express.json());
const cors = require('cors');
app.use(cors());


app.get('/data', async (req, res) => {
    try {
        const data = await fs.readJson(dataFilePath);
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.listen(8080, () => console.log(`Server Started`));
