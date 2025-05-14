import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService

    ) { }

    async createProduct(data: CreateProductDto): Promise<Product> {
        try {
            return this.prisma.product.create({ data })
        } catch (error) {
            throw new HttpException("Error in adding Product", 400)
        }
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            return this.prisma.product.findMany();
        } catch (error) {
            throw new HttpException("Error in getting All  Product", 400)

        }
    }

    async getProductById(id: string): Promise<Product> {
        try {
            const product = await this.prisma.product.findUnique({ where: { id } });
            if (!product) {
                throw new NotFoundException(`Product with ID ${id} not found`);
            }
            return product;
        }
        catch (error) {
            throw new HttpException("Error in getting the Product", 400)

        }
    }


}
