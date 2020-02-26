const express = require('express'),
router =express.Router();

// const rootController = (request, response)=>{
//     const snippet = `<h1>Happy Birthday Alan and (belated) Josh</h1>`
//     response.status(200) 
//     .send(snippet) 
//     .end();
// };

// same as above code.
router.get('/', (req,res)=>{
    const snippet = '<h1> Hello World<h1>'
    res.render('template', {
        locals: {
            title:'foo page',
        },
        partials:{
            partial: 'partial-foo'
        }
    });
});
module.exports = router;