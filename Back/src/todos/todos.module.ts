import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { UserModule } from 'src/user/user.module';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), UserModule, NotificationsModule],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TypeOrmModule],
})
export class TodosModule {}
