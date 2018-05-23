import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html'
})
export class StarRatingComponent implements OnInit {
    stars: boolean[];

    ngOnInit() {
        this.stars = [false, false, false, false, false];
    }

    public changeStar(star: number) {
        if (true === this.stars[star]) {
            this.resetStars();
            return;
        }
        this.resetStars();
        for (let i = 0; i <= star; i++) {
            this.stars[star] = true;
            // tslint:disable-next-line:prefer-const
            let momentStar = document.getElementById(i.toString()) as HTMLImageElement;
            momentStar.src = 'assets/full-star.png';
        }
    }

    private resetStars() {
        this.stars = [false, false, false, false, false];
        for (let i = 0; i < this.stars.length; i++) {
            // tslint:disable-next-line:prefer-const
            let momentStar = document.getElementById(i.toString()) as HTMLImageElement;
            momentStar.src = 'assets/empty-star.png';
        }
    }
}
