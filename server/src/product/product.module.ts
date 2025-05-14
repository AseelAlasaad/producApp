import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService, PrismaModule } from 'nestjs-prisma';

@Module({
  imports:[PrismaModule],
  providers: [ProductService],
  controllers:[ProductController]

  
})
export class ProductModule {}
