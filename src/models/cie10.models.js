import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const cie10Schema = new Schema({
    chapter: {
        type: String,
        required: true
    },
    chapter_name: {
        type: String,
        required: true,
        trim: true
    },
    cod_cie10_3: {
        type: String,
        required: true,
        trim: true
    },
    des_cie10_3: {
        type: String,
        required: true,
        trim: true
    },
    cod_cie10_4: {
        type: String,
        required: true,
        trim: true
    },
    des_cie10_4: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        versionKey: false,
        timestamps: false
    }
);

const Cie10 = model('cie10', cie10Schema);
export default Cie10;