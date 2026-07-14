use("users")
// db.employee.insertOne(
//     {
//         name:"alex",
//         age:20,
//         salary:12345,
//         email:"alex123@gmail.com"

//     }
// )

// db.employee.insertMany(
//     {
//         name:"alex",
//         age:20,     
//         salary:12345,
//         email:"alex123@gmail.com"


//     },
//     {
//         name:"joy",
//         age:23,     
//         salary:12346,
//         email:"joy456@gmail.com"


//     },
//     {
//         name:"tom",
//         age:25,     
//         salary:12347,
//         email:"tom890@gmail.com"


//     }
// )

// db.employee.findOne({name:"joy"})

// db.employees.findOne({
//      email:"tom890@gmail.com"

// })

db.employees.updateOne({name:"alex"},{$set:{salary:1234566}})

db.employees.deleteOne({name:"joy"})