import { Module } from "@nestjs/common";
import { UsersService } from "@app/modules/users/service";
import { UsersController } from "@app/modules/users/controller";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
