const express = require('express'),
      router = express.Router();

router.get('/:name?/:age?', (req,res)=>{
    const {name} = req.params;
    const {age} = req.params;
    const ageGreeting = `<h1>${name}, is ${age} years old.<h1>` 

    // console.log(req.params);

    // if (req.param.name == undefined  ){
    //      ageGreeting = "<h1>Hello World<h1>"
    //  };
    res.status(200)
    .send(ageGreeting)
    .end();
})

module.exports = router