const mongoose = require('mongoose')

const url = process.env.MONGODB_URL;

mongoose.set('strictQuery', false);

console.log('Connecting to Data Base in ',url);

mongoose.connect(url)
    .then(result => {
        console.log('Connection was succesfull to MongoDB');
        
    })
    .catch(error => {
        console.log('Error to connection on the MongoDB: ',error.message);
    })

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})


noteSchema.set('toJSON', {
    transform: (document, obj) =>{
        obj.id = document._id.toString()
        delete obj._id
        delete obj.__v
    }
})

module.exports = mongoose.model('Note', noteSchema);