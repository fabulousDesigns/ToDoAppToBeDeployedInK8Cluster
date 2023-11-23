"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/api/v1');
    app.enableCors({
        origin: '*',
        allowedHeaders: '*',
        methods: '*',
    });
    await app.listen(6060);
}
bootstrap();
//# sourceMappingURL=main.js.map