const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const Student = new Schema({
 Student_name:{
type:String    
}
});
module.exports = mongoose.model('Students', Student);