import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CoffeesModule } from './coffees/coffees.module';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  // imports: [CoffeesModule],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
