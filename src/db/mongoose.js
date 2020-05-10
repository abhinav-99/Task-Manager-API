//p4n1gPoJXApYiEFy
//mongodb+srv://abhi-kr:p4n1gPoJXApYiEFy@cluster0-plh2s.mongodb.net/test?retryWrites=true&w=majority


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhi-kr:p4n1gPoJXApYiEFy@cluster0-plh2s.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

mongoose.connection.on('connected', () => {
  console.log('connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.log('Failed to connect MongoDB')
})