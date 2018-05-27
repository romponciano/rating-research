import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css'],
    providers: [CalcService]
})
export class RatingComponent implements OnInit, OnChanges {
    rateType: string;
    stars: boolean[];
    thumbUp: boolean;
    thumbDown: boolean;
    private rateOptions: string[];
    @Input() movieChangedChild;

    constructor(private calcService: CalcService) { }

    ngOnInit() {
        this.rateOptions = ['star', 'thumbs'];
        this.stars = [false, false, false, false, false];
        this.thumbUp = false;
        this.thumbDown = false;
        this.rateType = this.calcService.getRandomArrayValue(this.rateOptions);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.movieChangedChild > 0) {
        if (this.isStar()) {
            this.resetStars();
        } else {
            this.resetThumbs();
        }
    }
    }

    isStar(): boolean { return this.rateOptions[0] === this.rateType; }
    isThumbs(): boolean { return this.rateOptions[1] === this.rateType; }

    changeStar(star: number) {
        if (true === this.stars[star]) {
            this.resetStars();
            return;
        }
        this.resetStars();
        for (let i = 0; i <= star; i++) {
            this.stars[star] = true;
            let momentStar = document.getElementById(i.toString()) as HTMLImageElement;
            momentStar.src = 'assets/full-star.png';
        }
    }

    changeThumb(choice: string) {
        this.resetThumbs();
        if (choice === 'up') {
            let thumb = document.getElementById('up') as HTMLImageElement;
            this.thumbUp = true;
            thumb.src = 'assets/up-activate.png';
        } else {
            let thumb = document.getElementById('down') as HTMLImageElement;
            this.thumbDown = true;
            thumb.src = 'assets/down-activate.png';
        }
    }

    resetStars() {
        this.stars = [false, false, false, false, false];
        for (let i = 0; i < this.stars.length; i++) {
            let momentStar = document.getElementById(i.toString()) as HTMLImageElement;
            momentStar.src = 'assets/empty-star.png';
        }
    }

    resetThumbs() {
        let thumb = document.getElementById('up') as HTMLImageElement;
        thumb.src = 'assets/up-desactivate.png';
        thumb = document.getElementById('down') as HTMLImageElement;
        thumb.src = 'assets/down-desactivate.png';
        this.thumbUp = false;
        this.thumbDown = false;
    }
}
