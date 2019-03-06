
abstract class Review {
    rate: number;

    constructor(rate: number) {

        this.rate = rate;
    }


    getRate(): number {
        return this.rate
    }

    setRate(newRate: number): void {
        this.rate = newRate;
    }


}
        var film= new Number(1);
        console.log("Rate of the book is: "+film.toString()); 


