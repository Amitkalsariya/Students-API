var express = require('express');
var router = express.Router();
const studentscontrolle=require('../Controllers/Student')
const marksController=require('../Controllers/Marks')

/* GET home page. */
router.post('/students/addstud',studentscontrolle.Add_Student);
router.get('/students',studentscontrolle.All_Student);


router.post('/marks/addmarks',marksController.Add_marks);
router.get('/marks',marksController.All_marks);
module.exports = router;
