
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
        var rate= new Number(1);
        console.log("Rate of the book is: "+rate.toString()); 




        class breifReview extends Review{


            private comment: String;    

            constructor(comment: String, rate:number) {
                super(rate)
                this.comment = comment;
            }
        }

        var comment = new String("This is a funny movie.");
        //override method. 
        console.log("Rate of this book is:" + rate.toString() + " " + "comment:" + comment.toString());

    