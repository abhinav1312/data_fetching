const mongoose = require('mongoose');

// function used to insert sample_data.json() into mongodb atlas
// const insertData = async () => {
//     try{
//         await UserDetail.create(data);
//         console.log("Created successfully")
//     }
//     catch(error){
//         console.log(error)
//         console.log("Error occured while inserting.")
//     }
// }
const userDetailSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String
})

const UserDetailModel = new mongoose.model('userDetail', userDetailSchema);

module.exports = UserDetailModel;