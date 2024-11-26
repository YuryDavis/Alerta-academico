const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn')
const app = express();

const AlunosRoutes = require('./routes/AlunosRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// read body
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());
app.use(express.static('public'));

app.use('/alunos', AlunosRoutes);
app.use('/',(req,res)=>{
    res.send('ola server')
})
app.listen(3000)