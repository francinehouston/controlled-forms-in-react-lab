import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // State for new book input
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target; 
  //   setNewBook({ ...books, [name]: value }); 
  
  // };
 


  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   const updatedBooks = [...books, newBook];
  //   setBooks(updatedBooks);
  //   setNewBook({ title: '', author: ''});
    
    

  // }
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setNewBook(prevBook => ({
      ...prevBook,  // Keep existing values
      [name]: value // Update only the field being edited
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Prevent empty book submissions
    if (!newBook.title.trim() || !newBook.author.trim()) return; 

  
    setBooks(prevBooks => [...prevBooks, { title: newBook.title, author: newBook.author }]);

 
    setNewBook({ title: '', author: '' });
  };


  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          {/* Form will go here */}
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
            <input
            id="title"
            name="title"
              type="text"
              placeholder='Book Title'
              value={newBook.title}
              onChange={(handleInputChange)}
            />
            <label htmlFor='Author'>Author:</label>
            <input
            id="author"
            name="author"
              type="text"
              placeholder='Author Name'
              value={newBook.author}
              onChange={handleInputChange} />
            <button type="submit">Add Book</button>
          </form>
        </div>

        {/* Book cards will display here */}
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};



export default Bookshelf;