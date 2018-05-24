import { Rating } from './rating.model';

export class User {
    public ip: string;
    public email: string;
    public ratingType: string;
    public rates: Rating[];

    constructor() {}
}
