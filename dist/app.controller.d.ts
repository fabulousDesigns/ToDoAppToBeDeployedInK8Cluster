import { AppService } from './app.service';
import { TaskDto } from './utils/createTaskDto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createTask(task: TaskDto): Promise<{
        message: string;
    }>;
    getAllTasks(): Promise<{
        tasks: import("./entities/task.entity").Task[];
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
    checkTaskIsDeleted(id: number): Promise<boolean | {
        message: string;
    }>;
}
