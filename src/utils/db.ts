require('dotenv').config();

//_____DATABASE_____///
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const  dataSchema = new Schema({
    name: String,
    data: Array
})

const dataModel = mongoose.model('bot-data', dataSchema);

async function getData() {
    const result = await dataModel.findOne({name: "diw4-thoughts"}).exec()
    return await result;
}

async function updateData(old:any, data:object) {
    await dataModel.findOneAndUpdate( {name: "diw4-thoughts"}, {data: [data, ...old]}, {new: true});
}

export { getData, updateData }