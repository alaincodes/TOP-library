function Book(title, author, pages, read) {
  this.title
  this.author
  this.pages
  this.read
  this.info = function() {
    console.log(`${title}, ${author}, ${pages}, ${read}`);
    return `${title}, ${author}, ${pages}, ${read}`;
  }
}

const BOOK1 = new Book('1Q84', 'Haruki Murakami', 300, 'Finished')