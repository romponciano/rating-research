import { Rating } from './rating.model';

export class User {
    constructor(
        public email: string,
        public ip: string,
        public terms: boolean,
        public ratingType: string,
        public rates: Rating[]
    ) {
        this.email = email;
        this.ip = ip;
        this.terms = terms;
        this.ratingType = ratingType;
        this.rates = rates;
    }
}
