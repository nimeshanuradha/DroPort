const express = require('express');
const app = express();
var port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log('listning on port', port)
});

app.post('/root',(req,res)=>{
    console.log('root ok')
});



