import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

    public getRandomArrayValue(values: any[]): any {
        return values[this.randomInt(0, values.length - 1)];
    }

    private randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
