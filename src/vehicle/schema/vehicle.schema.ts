import { Schema } from 'mongoose';

export const VehicleSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    reg: {
        type: String,
        required: true
    },
    registrationDate: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});