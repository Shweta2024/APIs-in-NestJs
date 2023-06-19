import { Controller , Post, Body, Get} from '@nestjs/common';

interface Idata{
    id: number;
    name: string;
}

@Controller('data')
export class DataController {
    private storeData: Idata[] = [];

    @Post()
    createData(@Body() data: Idata) {
        this.storeData.push(data);
    }

    @Get()
    getAllData() {
        return this.storeData;
    }
}
