const STUDENT=require('../Models/student')

exports.Add_Student=async function (req, res) {
    try {
      if(!req.body.Student_name)
        {
         throw new Error("Please Ensure That All feilds Are Filled ")  
        }
      const addstud = await STUDENT.create(req.body)
      res.status(200).json({
        status: "Success For Add The  Stud",
        data: addstud
  
      })
    } catch (error) {
      res.status(404).json({
        status: "Failed To Load The Data",
        error: error.message
      })
    }
}
exports.All_Student=async function (req, res) {
    try {
      const getstud = await STUDENT.find()
      res.status(200).json({
        status: "Success For Get All Students",
        data: getstud
  
      })
    } catch (error) {
      res.status(404).json({
        status: "Failed To Load The Data",
        error: error.message
      })
    }
}