import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { PrismaService } from 'nestjs-prisma';
@Module({
  imports: [ ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService,ProductService,PrismaService],
})
export class AppModule {}
