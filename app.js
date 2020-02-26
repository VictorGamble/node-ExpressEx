// importing express framework
const express = require('express');
const app = express();
const  e6Render = require('express-es6-template-engine');
app.engine("html", e6Render);
app.set('views', 'views');
app.set('view engine', 'html')

app.listen(3333,()=>{
    console.log(`server running on port 3333`)
})
//gets data
const rootController = require('./routes/index'),
      catController = require('./routes/cat'),
      dogController = require('./routes/dogs'),
      fooController = require('./routes/foo'),
      personController = require('./routes/person'),
      ageController = require('./routes/age');
      



app.use('/', rootController);
app.use('/cat', catController);
app.use('/dog', dogController);
app.use('/foo', fooController);
app.use('/person', personController);
app.use('/age', ageController);