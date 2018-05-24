import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';


@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    providers: [CalcService]
})
export class RatingComponent implements OnInit {
    private rateOptions: string[];
    public rateType: string;

    constructor(private calcService: CalcService) { }

    ngOnInit() {
        this.rateOptions = ['star', 'thumbs'];
        this.rateType = this.calcService.getRandomArrayValue(this.rateOptions);
    }

    public isStar(): boolean { return this.rateOptions[0] === this.rateType; }
    public isThumbs(): boolean { return this.rateOptions[1] === this.rateType; }

}
