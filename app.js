const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    const data = {
        name: 'John Doe',
        age: 30
    }
    res.send(data)
})

app.get('/contact', (req, res) => {
    res.send('contact page')
})

app.post('/',(req,res)=>{
    res.send('mthod post')
})
app.listen(3000, () => {
    console.log('Server listening on port 3000');
})