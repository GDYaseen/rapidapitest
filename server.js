let fs = require("fs")
let express = require("express")
const path = require('path');

const jsonFilePath = path.join(__dirname, 'questions.json');

let questions = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))

let app = express()

app.get("/",(req,res)=>{
    res.json(getRandomQuestions(req.query.amount))
})
function getRandomQuestions(n) {
  // Convert questions object to an array of its values
  let packet = {}
  // Shuffle array and pick the first N elements
  for (let i = 0; i < n; i++) {
    let id = Math.floor(Math.random()*20)
    packet[id]=questions[id]
  }

  return packet;
}
// console.log(questions[Math.floor(Math.random()*20)])
app.listen(4404, ()=>{console.log("Server online")})
