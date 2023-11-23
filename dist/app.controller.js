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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const createTaskDto_1 = require("./utils/createTaskDto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async createTask(task) {
        return await this.appService.createTask(task);
    }
    async getAllTasks() {
        return await this.appService.getAllTasks();
    }
    async updateTask(id) {
        return await this.appService.updateTask(id);
    }
    async checkTaskStatus(id) {
        return await this.appService.checkTaskStatus(id);
    }
    async deleteTask(id) {
        return await this.appService.deleteTask(id);
    }
    async checkTaskIsDeleted(id) {
        return await this.appService.checkTaskDeleted(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('task'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTaskDto_1.TaskDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)('tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Put)('task/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Get)('task/status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "checkTaskStatus", null);
__decorate([
    (0, common_1.Delete)('task/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Get)('task/isDeleted/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "checkTaskIsDeleted", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map