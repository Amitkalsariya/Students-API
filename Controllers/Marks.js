const MARKS=require('../Models/marks')

exports.Add_marks=async function (req, res) {
    try {
      
      const addstud = await MARKS.create(req.body)
      res.status(200).json({
        status: "Success For Add The  Marks",
        data: addstud
  
      })
    } catch (error) {
      res.status(404).json({
        status: "Failed To Load The Data",
        error: error.message
      })
    }
}
exports.All_marks=async function (req, res) {
    try {
      const getstud = await MARKS.find()
      res.status(200).json({
        status: "Success For Get All Marks Details",
        data: getstud
  
      })
    } catch (error) {
      res.status(404).json({
        status: "Failed To Load The Data",
        error: error.message
      })
    }
}