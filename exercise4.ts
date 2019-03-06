class Film { 


    private review: String[];

    constructor(review: String[]) {

        this.review = [];
    }


        getReview():String{
        return Array(this.review).join(" ");
    }

    setReview(newReview:String):void {
        this.review.push(newReview);
        }
    
    getReview1(): String[] {
        return this.review;
    }

}

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



        class breifReview extends Review{


            private comment: String;    

            constructor(comment: String, rate:number) {
                super(rate);
                this.comment = comment;
            }
        }


class CriticalReview extends Review {

            private observation: String;

            constructor(observation: String, rate: number) {
                super(rate);
                this.observation = observation;
            }


    }

        
            


var film1 = new String("RVIEW IS REVIEW");


function averageScore(socre1: number, score2: number, score3: number):number{

    return (socre1 + score2 + score3) / 3;
}



function review(review1: string):string{
 
    return review1;


}


function toString(film:Film): String[]{
    var filmString = film.getReview1();
    filmString.toString();
    return filmString;
}


function reviewAsString(rString1:string,rString2:string){

    var rString3 = rString1.concat(rString2);
    return rString3


}

console.log("String As:" + reviewAsString("ReviewPlus", "ReviewPlusPlus"));

console.log("Average Socre :" + averageScore(3,3,3));

console.log(review("This should be a sentence about REVIEW"));
//console.log(film1.getReview());