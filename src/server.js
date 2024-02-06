const express = require('express');
const mongoose = require('mongoose');
const Collection = require('./connection');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("YOUR MONGO DB URL").then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});

app.post('/create', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newData = new Collection({
            email: email,
            password: password
        });

        await newData.save();
        res.status(201).json({ message: 'Data inserted successfully' });
        console.log("Data entered successfully")
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await Collection.findOne({ email: email, password: password });
  
      if (existingUser) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
app.listen(8000, () => {
    console.log('Port Connected');
});
