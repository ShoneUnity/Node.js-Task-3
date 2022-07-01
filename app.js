const express = require('express')
const app = express()
const port = 3000

app.get('/number', function (req, res) {
  res.send('Go to /number/:num to check if :num is prime or composite')
})

app.get("/number/:num", (req, res) => {
  const number = req.params.num

  if (number == 1)
  {
    res.send('The number 2 is prime')
  }

  if (number == 2)
  {
    res.send('The number 2 is prime')
  }

  else if(number > 1) {
    for(let a = 2; a < number; a++) {
      if(number % a == 0) {
        res.send('The number ' + number + ' is composite')
      }
    }
    for(let a = 2; a < number; a++) {
      if(number % a == 1) {
        res.send('The number ' + number + ' is prime')
      }
    }
  }
  else {
    res.send('The number ' + number + ' is a negative number, enter a positive number')
  }

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
