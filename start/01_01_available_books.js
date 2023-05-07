// Write your code here
function Book (title, author, ISBN, numberOfCopies){
this.title = title;
this.author = author;
this.ISBN = ISBN;
this.numberOfCopies = numberOfCopies;
  
}
  Book.prototype.getAvailability = function () {
    if(this.numberOfCopies === 0){
      return "Out of stuck"
    } else if(this.numberOfCopies <= 10){
      return "Low Stock";
    }
    return "In stock";
  }

  Book.prototype.sell = function (copiesToSell = 1) {
    this.numberOfCopies -= copiesToSell;
  }

  Book.prototype.reStock = function (copiesToAdd = 5){
    this.numberOfCopies += copiesToAdd;
  }
const myBook = new Book("Harry Poter","New Author", 2324232, 5 );
console.log(myBook);

console.log("-----", myBook.getAvailability());
myBook.reStock(12);
console.log("-----", myBook.getAvailability());

myBook.sell(17);

console.log("-----", myBook.getAvailability());

