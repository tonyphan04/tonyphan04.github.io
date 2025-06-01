/* eslint-disable prettier/prettier */
import { PostsService } from '../src/services/post.service';
import { Module } from '@nestjs/common';
import { PostController } from '../src/controller/post.controller';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostsService, PrismaService],
})
export class AppModule {}
