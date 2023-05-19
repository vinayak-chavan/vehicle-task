import { Document } from 'mongoose';

export interface Vehicle extends Document {
    company: string;
    modelName: string;
    reg: string;
    registrationDate: string;
}