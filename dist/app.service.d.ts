import { Task } from './entities/task.entity';
import { TaskDto } from './utils/createTaskDto';
import { Repository } from 'typeorm';
export declare class AppService {
    private readonly taskEntity;
    constructor(taskEntity: Repository<Task>);
    createTask(task: TaskDto): Promise<{
        message: string;
    }>;
    getAllTasks(): Promise<{
        tasks: Task[];
        message?: undefined;
    } | {
        message: string;
        tasks?: undefined;
    }>;
    updateTask(id: number): Promise<{
        message: string;
    }>;
    checkTaskStatus(id: number): Promise<boolean | {
        message: string;
    }>;
    deleteTask(id: number): Promise<{
        message: string;
    }>;
    checkTaskDeleted(id: number): Promise<boolean | {
        message: string;
    }>;
}
