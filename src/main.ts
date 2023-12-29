import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as fs from 'fs';
import * as path from 'path';

// const folderPath = path.join(__dirname, 'upload');

const folderPath = '/Users/razvanmustata/Projects/coins/coins-backend/UploadPhotos'

// import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  
// Create the upload folder
fs.mkdirSync(folderPath, { recursive: true });
console.log(`Folder "${folderPath}" created successfully.`);
  
  const app = await NestFactory.create(AppModule, {cors: true});
  // app.setGlobalPrefix('api');
  // app.enableCors();  
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
