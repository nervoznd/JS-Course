class Book {
    constructor(bookTitle, author, publicationYear) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayInfo() {
        console.log(`Title: ${this.bookTitle}, Author: ${this.author}, Year: ${this.publicationYear}`);
    }
}

class Ebook extends Book {
    constructor(bookTitle, author, publicationYear, ebookPrice) {
        super(bookTitle, author, publicationYear);
        this.ebookPrice = ebookPrice;
    }

    displayInfo() {
        console.log(`Title: ${this.bookTitle}, Author: ${this.author}, Year: ${this.publicationYear}, Price: $${this.ebookPrice}`);
    }
}

const myEbook = new Ebook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 29.99);
myEbook.displayInfo();