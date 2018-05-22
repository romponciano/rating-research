import { Component, OnInit  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface RatingOption {
    value: string;
    label: string;
    imgUrl: string;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    public ratingChoice: RatingOption;
    public options: RatingOption[];
    public inputEmail: FormControl;

    ngOnInit() {
        this.initializeOptions();
        this.inputEmail = new FormControl('', [
            Validators.email,
            Validators.required
        ]);
    }

    private initializeOptions() {
        this.options = [
            { value: 'star', label: 'Sistema de Estrelas', imgUrl: '../assets/star-rating.png'},
            { value: 'binary', label: 'Sistema Like/Dislike', imgUrl: '../assets/binary-rating.png'}
        ];
    }
}
