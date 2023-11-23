import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto } from './utils/createTaskDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  //? *******************************************************************************************************************
  //! create a task
  //? *******************************************************************************************************************
  @Post('task')
  async createTask(@Body() task: TaskDto) {
    return await this.appService.createTask(task);
  }
  //? *******************************************************************************************************************
  //! get all tasks
  //? *******************************************************************************************************************
  @Get('tasks')
  async getAllTasks() {
    return await this.appService.getAllTasks();
  }
  //? *******************************************************************************************************************
  //! update a task
  //? *******************************************************************************************************************
  @Put('task/update/:id')
  async updateTask(@Param('id') id: number) {
    return await this.appService.updateTask(id);
  }
  //? *******************************************************************************************************************
  //! Check if a task status is true
  //? *******************************************************************************************************************

  @Get('task/status/:id')
  async checkTaskStatus(@Param('id') id: number) {
    return await this.appService.checkTaskStatus(id);
  }
  //? *******************************************************************************************************************
  //! Delete a Task
  //? *******************************************************************************************************************

  @Delete('task/delete/:id')
  async deleteTask(@Param('id') id: number) {
    return await this.appService.deleteTask(id);
  }
  //? *******************************************************************************************************************
  //! Check if a task is deleted
  //? *******************************************************************************************************************

  @Get('task/isDeleted/:id')
  async checkTaskIsDeleted(@Param('id') id: number) {
    return await this.appService.checkTaskDeleted(id);
  }


}
