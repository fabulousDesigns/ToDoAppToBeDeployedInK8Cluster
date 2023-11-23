import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');//? set global prefix
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
  });//? enable cors
  // app.enableVersioning();//? enable versioning
  await app.listen(6060);
}
bootstrap();
