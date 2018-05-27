export class Rating {
    constructor(
        public movieId: string,
        public rate: string,
        public duration: string
    ) {
        this.movieId = movieId;
        this.rate = rate;
        this.duration = duration;
    }
}
