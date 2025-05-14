import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async create(@Body() dto: CreateProductDto): Promise<Product> {
        return this.productService.createProduct(dto);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Product> {
        return this.productService.getProductById(id);
    }
}
