const express = require('express');
const router = express.Router();
const axios = require('axios')

require('dotenv').config();

router.get('/', (req, res) => {
    let endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&limit=1&rating=G`;

    axios.get(endpoint)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            console.log('error in get giphy', error)
        })
})

module.exports = router;