import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    ratingChoice: string;

    options = [
        'Sistema de estrelas',
        'Sistema like/dislike'
    ];
}
