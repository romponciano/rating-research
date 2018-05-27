import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { User } from '../models/user.model';
import { JsonService } from '../services/json.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Rating } from '../models/rating.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [JsonService, AngularFireDatabase]
})
export class FormComponent implements OnInit, OnDestroy {
    inputEmail: string;
    termsAccepted: boolean;
    userIp: string;
    ratingType: string;
    ratingList: Rating[];
    user: User;
    db = this.angularFire.database;

    constructor(
        private jsonService: JsonService,
        private angularFire: AngularFireDatabase,
        private router: Router
    ) { }

    async ngOnInit() {
        this.termsAccepted = false;
        this.ratingList = [];
        this.inputEmail = '';
        await this.jsonService.getIp().then(data => this.userIp = data);
    }

    ngOnDestroy(): void {
        this.finishSession();
    }

    finish($event) {
        if ($event) {
            this.router.navigate(['/thanks']);
        }
    }

    finishSession() {
        if (this.termsAccepted === true) {
            this.user = new User(
                this.inputEmail,
                this.userIp,
                this.termsAccepted,
                this.ratingType.toString(),
                this.ratingList
            );
            this.createUser(this.user);
        }
    }

    receiveRating($event) {
        this.ratingList.push($event);
    }

    receiveRatingType($event) {
        this.ratingType = $event;
    }

    // ###################################################################
    public createUser(user: User) {
        let id = this.getEmailId(user.email);
        this.db.ref('/users/' + id).set(user);
    }

    private getOriginalEmail(emailId: string) {
        return emailId.split('DOTCHANGED').join('.').replace('ATCHANGED', '@');
    }

    private getEmailId(email: string) {
        return email.split('.').join('DOTCHANGED').replace('@', 'ATCHANGED');
    }
}
