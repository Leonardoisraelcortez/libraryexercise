class Book {
    constructor(title, author, ISBN, availability = true){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availability = availability;
    }
}

class Library {
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(ISBN){
        this.books = this.books.filter((book)=> book.ISBN !== ISBN);
    }

    displayAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach((book, index) => {
            if (book.availability) {
                console.log(`${index+1}. ${book.title} by ${book.author}`);
            }
        });
        }

}

class ReferenceBook extends Book {
    constructor(title, author, ISBN, category, availability = true) {
        super(title, author, ISBN, availability)
        this.category = category;
    }
}

//working code

const library = new Library();

const book1 = new Book ("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book ("To Kill a Mockingbird", "Harper Lee", "9780060935467" );
const book3 = new ReferenceBook ("1984", "George Orwell", "9780451524935", "Dystopian Fiction");
const book4 = new Book ("Angels and Demons", "Dan Brown", "949561877")

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.displayAvailableBooks();

console.log("\nRemoving book...");

library.removeBook("9780743273565");

library.displayAvailableBooks();



