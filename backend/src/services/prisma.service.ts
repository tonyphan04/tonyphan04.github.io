/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _post: any;
  public get post(): any {
    return this._post;
  }
  public set post(value: any) {
    this._post = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
}
