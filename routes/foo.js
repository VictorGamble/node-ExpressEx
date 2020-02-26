const express = require('express'),
      router = express.Router();
const data = [
    {name: 'Jason', zord: 't-rex'},
    {name: 'Billy', zord:'triceraptops'}
]

// router.get("/", (req,res)=>{
//     res.status(200)
//     .send('<h1>Foo<h1>')
//     .end();
// });

router.get('/', (req,res)=>{
    const snippet = '<h1> Hello World<h1>'
    res.render('template', {
        locals: {
            title:'foo page',
            arrayOfData: data
        },
        partials:{
            partial: 'partial-foo'
        }
    });
});


module.exports = router;