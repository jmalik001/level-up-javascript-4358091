// Write your code here
class Book {
constructor(title, author, ISBN, numberOfCopies){
this.title = title;
this.author = author;
this.ISBN = ISBN;
this.numberOfCopies = numberOfCopies;
}

get availability(){
  return this.getAvailability();
}

getAvailability() {
if(this.numberOfCopies === 0){
      return "Out of stuck"
    } else if(this.numberOfCopies <= 10){
      return "Low Stock";
    }
    return "In stock";
}

sell (copiesToSell = 1) {
 this.numberOfCopies -= copiesToSell;
}
  
reStock(copiesToAdd = 5){
  this.numberOfCopies += copiesToAdd;
}

}


  
const myBook = new Book("Harry Poter","New Author", 2324232, 5 );
console.log(myBook);

console.log("-----", myBook.availability);
myBook.reStock(12);
console.log("-----", myBook.availability);

myBook.sell(17);

console.log("-----", myBook.availability);

