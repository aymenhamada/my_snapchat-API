const config = require('./config');
const mongoose = require ('mongoose');

mongoose.connect(config.database, {useNewUrlParser: true}, function(err){
    if(err) throw err;
    console.log('Connected to database !');
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

require('./models/User')
require('./models/Snap')

const app = require('./app');
app.listen(config.port, config.host, () => {
    console.log(`server running on ${config.port}`);
})