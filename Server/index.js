const express = require('express');
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const ProviderModel = require('./models/Providers')
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(express.json()) 
app.use(cors()) 
mongoose.connect('mongodb+srv://dbYUser:dbYUserpwd@mern-0.tm9l0zc.mongodb.net/Swifto?retryWrites=true&w=majority').then(()=>{
    console.log('Connected to MongoDB')
})

app.get('/login',  (req, res) => {
    console.log("requested /login")
    const { username, password } = req.body;
    try {
        const user =  UserModel.findOne({ username, password });

        if (user) {
            const accessToken = jwt.sign(
                {
                    username: user.username
                }, '#Aa123456', 
            )
            res.status(200).json({ message: 'Login successful', accessToken: accessToken });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/signup', async (req, res)=>{
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(user)
})


app.get('/providers', async (req, res)=>{
    await ProviderModel.find({})
    .then((providers)=>{
        console.log('requested /providers')
        res.json(providers)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
})

app.post('/register', async (req, res)=>{
    console.log('requested /register')
    const provider = req.body
    const newProvider = new ProviderModel(provider)
    await newProvider.save()

    res.json(provider)
})

app.listen(3001,()=>{
    console.log('Server is rnning at 3001')
})