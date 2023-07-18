const mongoose = require('mongoose');
// zEju6VsspVhLVrA1
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://waseem:zEju6VsspVhLVrA1@cluster0.ecr8kul.mongodb.net/CRUD_API');
        console.log('Connected with mongodbDb')
 }

module.exports = main