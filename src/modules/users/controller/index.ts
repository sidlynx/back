import {Controller, Get} from "@nestjs/common";

@Controller("users")
export class UsersController {
    @Get()
    index(){
        return "Hello from users";
    }
}