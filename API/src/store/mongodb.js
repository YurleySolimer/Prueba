import mongoose from 'mongoose'
import config from '../config'

const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  user: config.DB.USER,
  pass: config.DB.PASSWORD
}

mongoose.connect(config.DB.URI, dbOptions)
const connection = mongoose.connection

connection.once('open', () => {
  console.log('Mongodb Connection stablished')
})

connection.on('error', (err) => {
  console.log('Mongodb connection error:', err)
  process.exit()
})

