import express from 'express';
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) => {
    res.send("server is ready !")
})
app.get('/login',(req,res) => {
    res.send("login !")
})
app.get('/api/jock',(req,res) =>{
  const jock = [
    { id: 1,
      titele: 'A jock',
      content:'This is jock'
    },
    { id: 2,
      titele: 'Another jock',
      content:'This is another jock'
    },
    { id: 3,
      titele: 'A third jock',
      content:'This is third jock'
    },
    { id: 4,
      titele: 'A fourth jock',
      content:'This is fourth jock'
    },
    { id: 5,
      titele: 'A fifth jock',
      content:'This is fifth jock'
    }
  ];
  res.send(jock);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})