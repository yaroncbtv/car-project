const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yaroncbtv:Yaron052@cluster0.5uy0e.mongodb.net/car?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const { Schema } = mongoose;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db is connected!')
});

const ListSchema = new Schema({
    name : { type: String, required: true, trim: true },
    description : { type: String, trim: true }
});

module.exports = mongoose.model('List', ListSchema);
