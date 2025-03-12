document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://anapioficeandfire.com/api/books/';

  const app = document.querySelector('#books');

  const addBook = (book) => {
    let element = document.createElement('div');
    let title = document.createElement('h3');
    let author = document.createElement('p');
    let release = document.createElement('p');
    let pages = document.createElement('p');

    title.textContent = book.name;
    author.textContent = book.authors;
    release.textContent = book.released;
    pages.textContent = book.numberOfPages;

    element.appendChild(title);
    element.appendChild(author);
    element.appendChild(release);
    element.appendChild(pages);

    element.style.textAlign = 'center';
    element.style.marginTop = '20px';

    app.appendChild(element);
  };

  const fetchData = (url) => {
    // Fetch all books from the API of Ice and Fire and append them to the DOM
    // Create an element for each book that contains title, author, publication year, and number of pages
    // Update the styles in JavaScript to center all the books in the container given
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(book => {
          console.log(book.name, book.authors[0])

          addBook(book);
        });
      })
      .catch(error => console.error(error))
      .finally(() => {
        let loader = document.querySelector('#loading');
        if (loader) {
          app.removeChild(loader);
        }
      });
  };

  // Call fetchData to initiate the fetch request
  fetchData(url);
});
