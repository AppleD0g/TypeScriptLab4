class Film { 

    private id:number;
    private title: string;
    private price: number;
    private genre: string;
    private score: number;
    private about: string;

    constructor(id: number, title: string, price: number, genre: string, score: number, about: string) {

        this.id = id;
        this.title = title;
        this.price = price;
        this.genre = genre;
        this.score = score;
        this.about = about;
    }

    getId():number{
        return this.id;
    }

    setId(newId:number):void {
        this.id = newId;
    }

    getTitle(): string{
        return this.title;
    }

    setTitle(newTitle: string): void{
        this.title = newTitle;
    }

        getPrice():number{
        return this.price;
    }

    setPrice(newPrice:number):void {
        this.price = newPrice;
        }
    
    getGenre(): string{
        return this.genre;
    }

    setGenre(newGenre: string): void{
        this.genre = newGenre;
    }

     getScore():number{
    return this.score;
    }

    setScore(newScore:number):void {
        this.score = newScore;
    }

    getAbout(): string{
        return this.about;
    }

    setAbout(newAbout: string): void{
        this.about = newAbout;
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

            constructor(observation: String, comment: String, rate: number) {
                super(rate);
                this.observation = observation;

            }
        }


var film1 = new Film(501, "Pets", 5, "funny", 5, "Pet is an American/Spanish psychological thriller film written by Jeremy Slater, directed by Carles Torrens, and starring Dominic Monaghan, Ksenia Solo, Jennette McCurdy, and Nathan Parsons");


function addGenre(fgenre: string, film: Film):string{
    var newGenre = fgenre + "," + film.getGenre();
    film.setGenre(newGenre);
    var test = film.getGenre();
    return test;    
}


function averageScore(socre1: number, score2: number, score3: number):number{

    return (socre1 + score2 + score3) / 3;
}


function rate(rate1: number):number{
 
    return rate1;


}


function genreAsString(str1: string,str2: string) {

var str3 = str1.concat( str2 ); 
    return str3;
}

function toString(film:Film): string{
    var filmString = film.getId() + film.getTitle() + film.getPrice() + film.getScore() + film.getGenre() + film.getAbout();
    filmString.toString();
    return filmString;
}


console.log("String Concatenation: "+ genreAsString("Horror", "Funny"));

console.log("Average Socre :" + averageScore(3, 4, 5)+" Film Rating: "+rate(2));

console.log(toString(film1));


console.log(film1.getId() + 'name' + film1.getTitle() + 'price:' + film1.getPrice() + 'genre:' + film1.getGenre() + 'rating:' + film1.getScore()+
    'description' + film1.getAbout());

console.log("Film Genres: " + addGenre("horror", film1));
console.log("Film Genres: " + addGenre("horror2", film1));