const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

// const io = require('./socket')


app.use(cors())

app.use(bodyParser.json({ type: 'application/json' }))

require('./routes/auth')(app)
require('./routes/voice')(app)
require('./routes/question')(app)


const server = app.listen(PORT, () => {
    console.log('Sever listened in on ' + PORT);
})

const io = require('./socket').init(server)
io.on('connection', socket => {
    console.log(socket.id)
    console.log('Client connnected')
    socket.on('try', data => {
        console.log(data)
        io.emit('back', { back: 'back' })
    })
})