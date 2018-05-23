import { Component, OnInit  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    public inputEmail: FormControl;

    ngOnInit() {
        this.inputEmail = new FormControl('', [
            Validators.email,
            Validators.required
        ]);
    }
}
