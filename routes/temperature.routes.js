const router = require("express").Router();

router.post("/v1/temperatures/convert", (request, response) => {
    const temperature = {
       "value": 20,
       "unit": "CELSIUS"
    };
    
    response.send(temperature).status(200);
 });

 module.exports = router;