const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log("Conectado no banco appMongoose")
}).catch((err) => {
  console.log("Erro ao conectar ao banco: " + err)
})