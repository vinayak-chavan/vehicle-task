import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Vehicle } from './interface/vehicle.interface';
import { CreateVehicleDTO } from './dto/create-vehicle.dto';

@Injectable()
export class VehicleService {

    constructor(@InjectModel('vehicle') private vehicleModel: Model<Vehicle>) { }

    async createVehicle(createVehicleDTO: CreateVehicleDTO): Promise<Vehicle> {
        const vehicle = new this.vehicleModel(createVehicleDTO);
        return await vehicle.save();
    }

    async deleteVehicle(vehicleID: string): Promise<Vehicle> {
        const deletedVehicle = await this.vehicleModel.findByIdAndDelete(vehicleID);
        return deletedVehicle;
    }       

    async getVehicle(vehicleID: string): Promise<Vehicle> {
        const vehicle = await this.vehicleModel.findById(vehicleID);
        return vehicle;
    }

    async getVehicles(): Promise<Vehicle[]> {
        const vehicles = await this.vehicleModel.find();
        return vehicles;
    }

    async updateVehicle(vehicleID: string, createVehicleDTO: CreateVehicleDTO): Promise<Vehicle> {
        const updatedVehicle = await this.vehicleModel.findByIdAndUpdate(vehicleID,
                                                                   createVehicleDTO,
                                                                   { new: true });
        return updatedVehicle;
    }
}
