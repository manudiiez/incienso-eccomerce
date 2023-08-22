import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        public_id: String,
        secure_url: String
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

export default mongoose.model('Product', productSchema)
