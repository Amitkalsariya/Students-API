const MARKS = require('../Models/marks')

exports.Add_marks = async function (req, res) {
  try {
    if (!req.body.hindi || !req.body.guj || !req.body.eng || !req.body.Student_name) {
      throw new Error("Please Ensure That All feilds Are Filled ")
    }
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
exports.All_marks = async function (req, res) {
  try {
    // const getstud = await MARKS.find().populate('Student_name')
    const result = await MARKS.aggregate([
      {
        $lookup: {
          from: "students",  // Assuming there is a collection called "students" for student details
          localField: "Student_name",  // Reference field in "marks" collection
          foreignField: "_id",  // The referenced field in "students" collection
          as: "studentDetails"
        }
      },
      {
        $addFields: {
          Total: {
            $sum: [
              "$hindi",
              "$guj",
              "$eng"
            ]
          },
          Average: {
            $avg: [
              "$hindi",
              "$guj",
              "$eng"
            ]
          },
          Maximum: {
            $max: [
              "$hindi",
              "$guj",
              "$eng"
            ]
          },
          Minimum: {
            $min: [
              "$hindi",
              "$guj",
              "$eng"
            ]
          }

        }
      }
    ])
    // console.log("->>"+getstud);

    res.status(200).json({
      status: "Success For Get All Marks Details",
      data: result

    })
  } catch (error) {
    res.status(404).json({
      status: "Failed To Load The Data",
      error: error.message
    })
  }
}