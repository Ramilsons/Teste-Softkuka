const express = require("express")
const axios = require('axios');

const router = new express.Router()

const url = `https://swapi.dev/api`

router.get('/getPlanets/:id', (req, res) => {

    if (req.params.id > 60) {
        res.send("Não há dados para esse id")
    }
    else {
        axios.get(`${url}/planets/${req.params.id}/`)
            .then((resolve) => {
                res.send(resolve.data)
            })
            .catch(err => console.log(err))
    }

})

router.get('/getCharacters/:id', (req, res) => {

    if (req.params.id > 16){
        res.send("Não há dados para esse id")       
    }
    else{
        axios.get(`${url}/people/${req.params.id}/`)
            .then((resolve) => {
                res.send(resolve.data)
            })
            .catch(err => console.log(err))
    }
})


module.exports = router