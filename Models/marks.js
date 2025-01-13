const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const Marks = new Schema({
 hindi:{
    type:Number
 },
 guj:{
    type:Number
 },
 eng:{
    type:Number
 }

});
module.exports = mongoose.model('Mark', Marks);