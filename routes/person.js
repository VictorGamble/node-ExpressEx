const express = require('express'),
      router = express.Router();

      router.get('/:name?', (req,res)=>{
        console.log('url parameters are: ', req.params);
        const {name} = req.params || 'New User';
        const greeting =  `<h1>Hello, ${name}</h1>`
        
        res.status(200)
          .send(greeting)
          .end()
      });

      module.exports = router;