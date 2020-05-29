import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cadu:cadu3105@cluster0-vjqze.mongodb.net/test?retryWrites=true&w=majority'),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
