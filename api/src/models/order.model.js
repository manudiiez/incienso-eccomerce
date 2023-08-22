import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    order: {
        type: Array,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

export default mongoose.model('Order', orderSchema)
