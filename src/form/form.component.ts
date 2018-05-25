import { Component, OnInit  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [AngularFireDatabase]
})
export class FormComponent implements OnInit {
    public inputEmail: FormControl;
    public termsAccepted: boolean;
    private user: User;

    ngOnInit() {
        this.inputEmail = new FormControl('', [
            Validators.email,
            Validators.required
        ]);
        this.termsAccepted = false;
    }

    constructor(private angularFire: AngularFireDatabase) { }

    public toggleTerms() {
        this.termsAccepted = !this.termsAccepted;
    }

    public formSubmit() {
        this.user = new User();
        this.user.email = this.inputEmail.value;
    }
}
