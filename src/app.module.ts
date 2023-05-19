import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/vehicle-task?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    { useNewUrlPaser: true, useUnifiedTopology: true }),
    VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
