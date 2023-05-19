import { Controller, Delete, Get, Post, Put, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateVehicleDTO } from './dto/create-vehicle.dto';
import { VehicleService } from './vehicle.service';


@Controller('vehicle')
export class VehicleController {

    constructor(private VehicleService: VehicleService) {}

    @Post('/create')
    async createVehicle(@Res() res, @Body() createVehicleDTO: CreateVehicleDTO): Promise<JSON> {
        const createdVehicle = await this.VehicleService.createVehicle(createVehicleDTO);

        return res.status(HttpStatus.OK).json({
            data: createdVehicle,
            message: 'Vehicle was successfully created.',
            status: HttpStatus.OK
        });
    }

    @Delete('/:id')
    async deleteVehicle(@Res() res, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const deletedVehicle = this.VehicleService.deleteVehicle(id);
            jsonResponse = {
                data: deletedVehicle,
                message: `Vehicle with id ${id} was deleted.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `Vehicle with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }

    @Get('/getAll')
    async getAllVehicles(@Res() res): Promise<JSON> {
        const vehicles = await this.VehicleService.getVehicles();

        return res.status(HttpStatus.OK).json({
            data: vehicles,
            message: 'Returning all vehicles.',
            status: HttpStatus.OK
        });
    }

    @Get('/:id')
    async getVehicleById(@Res() res, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const vehicle = await this.VehicleService.getVehicle(id);
            jsonResponse = {
                data: vehicle,
                message: `Returning vehicle ${id}.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `Vehicle with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }

    @Put('/:id')
    async updateVehicle(@Res() res, @Body() createVehicleDTO: CreateVehicleDTO, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const vehicle = await this.VehicleService.updateVehicle(id, createVehicleDTO);
            jsonResponse = {
                data: vehicle,
                message: `Returning updated vehicle ${id}.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `Vehicle with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }
}
