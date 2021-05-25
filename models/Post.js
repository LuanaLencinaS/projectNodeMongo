const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//ESTRUTURA DO POST
const postSchema = new mongoose.Schema({
  title:{
    type:String,
    trim:true, //"   Meu Titulo  "
    required: 'O post precisa de um título.'
  },
  slug:String,
  body:{
    type:String,
    trim:true,
  },
  tags:[String]
});

module.exports = mongoose.model('Post', postSchema);