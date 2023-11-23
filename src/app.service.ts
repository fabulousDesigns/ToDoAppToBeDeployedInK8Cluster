import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TaskDto } from './utils/createTaskDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateDto } from './utils/updateTaskDto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Task) private readonly taskEntity: Repository<Task>) { }
  //? *******************************************************************************************************************
  //! create a task
  //? *******************************************************************************************************************

  async createTask(task: TaskDto) {
    try {
      await this.taskEntity.save(task);
      return { message: 'Task created successfully' };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Task already exists')
      }
      return { message: 'Error creating task' };
    }
  }
  //? *******************************************************************************************************************
  //! get all tasks
  //? *******************************************************************************************************************
  async getAllTasks() {
    try {
      const tasks = await this.taskEntity.find();
      return { tasks };
    } catch (error) {
      return { message: 'Error getting tasks' };
    }
  }
  //? *******************************************************************************************************************
  //! update a task
  //? *******************************************************************************************************************
  async updateTask(id: number) {
    const task = await this.taskEntity.findOne({ where: { id: id } });
    if (!task) {
      return { message: 'Task not found' };
    }
    task.status = true;
    const updatedTask = this.taskEntity.create(task);
    try {
      await this.taskEntity.save(updatedTask);
      return { message: 'Task updated successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Error updating task');
    }
  }
  //! Check if a task status is true
  async checkTaskStatus(id: number) {
    const task = await this.taskEntity.findOne({ where: { id: id } });
    if (!task) {
      return { message: 'Task not found' };
    }
    return task.status;
  }
  //! Delete a Task
  async deleteTask(id: number) {
    const task = await this.taskEntity.findOne({ where: { id: id } });
    if (!task) {
      return { message: 'Task not found' };
    }
    try {
      await this.taskEntity
        .createQueryBuilder()
        .delete()
        .from(Task)
        .where('id = :id', { id: id })
        .execute();

      task.isDeleted = true;
      return { message: 'Task deleted successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Error deleting task');
    }
  }
  //! Check if a task is deleted
  async checkTaskDeleted(id: number) {
    const task = await this.taskEntity.findOne({ where: { id: id } });
    if (!task) {
      return { message: 'Task not found' };
    }
    return task.isDeleted;
  }

}
