import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  nestApp.setGlobalPrefix("v1");
  await nestApp.listen(3000);
})()

