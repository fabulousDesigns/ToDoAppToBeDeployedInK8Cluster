"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("./entities/task.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppService = class AppService {
    constructor(taskEntity) {
        this.taskEntity = taskEntity;
    }
    async createTask(task) {
        try {
            await this.taskEntity.save(task);
            return { message: 'Task created successfully' };
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Task already exists');
            }
            return { message: 'Error creating task' };
        }
    }
    async getAllTasks() {
        try {
            const tasks = await this.taskEntity.find();
            return { tasks };
        }
        catch (error) {
            return { message: 'Error getting tasks' };
        }
    }
    async updateTask(id) {
        const task = await this.taskEntity.findOne({ where: { id: id } });
        if (!task) {
            return { message: 'Task not found' };
        }
        task.status = true;
        const updatedTask = this.taskEntity.create(task);
        try {
            await this.taskEntity.save(updatedTask);
            return { message: 'Task updated successfully' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error updating task');
        }
    }
    async checkTaskStatus(id) {
        const task = await this.taskEntity.findOne({ where: { id: id } });
        if (!task) {
            return { message: 'Task not found' };
        }
        return task.status;
    }
    async deleteTask(id) {
        const task = await this.taskEntity.findOne({ where: { id: id } });
        if (!task) {
            return { message: 'Task not found' };
        }
        try {
            await this.taskEntity
                .createQueryBuilder()
                .delete()
                .from(task_entity_1.Task)
                .where('id = :id', { id: id })
                .execute();
            task.isDeleted = true;
            return { message: 'Task deleted successfully' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error deleting task');
        }
    }
    async checkTaskDeleted(id) {
        const task = await this.taskEntity.findOne({ where: { id: id } });
        if (!task) {
            return { message: 'Task not found' };
        }
        return task.isDeleted;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map