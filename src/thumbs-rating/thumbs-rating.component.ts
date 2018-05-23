import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-thumbs-rating',
    templateUrl: './thumbs-rating.component.html',
    styleUrls: ['./thumbs-rating.component.css']
})
export class ThumbsRatingComponent implements OnInit {
    private up: boolean;
    private down: boolean;

    ngOnInit() {
        this.up = false;
        this.down = false;
    }

    public changeThumb(choice: string) {
        this.resetThumbs();
        if (choice === 'up') {
            // tslint:disable-next-line:prefer-const
            let thumb = document.getElementById('up') as HTMLImageElement;
            this.up = true;
            thumb.src = 'assets/up-activate.png';
        } else {
            // tslint:disable-next-line:prefer-const
            let thumb = document.getElementById('down') as HTMLImageElement;
            this.down = true;
            thumb.src = 'assets/down-activate.png';
        }
    }

    private resetThumbs() {
        let thumb = document.getElementById('up') as HTMLImageElement;
        thumb.src = 'assets/up-desactivate.png';
        thumb = document.getElementById('down') as HTMLImageElement;
        thumb.src = 'assets/down-desactivate.png';
        this.up = false;
        this.down = false;
    }
}
