import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Category from './components/Category'
import './App.css';

// const categories = [
//   {
//     "id": 5412,
//     "title": "prehistoric times",
//     "clues_count": 10
//   },
//   {
//     "id": 11496,
//     "title": "acting families",
//     "clues_count": 5
//   },
//   {
//     "id": 11498,
//     "title": "world city walk",
//     "clues_count": 5
//   },
//   {
//     "id": 11499,
//     "title": "books",
//     "clues_count": 5
//   },
//     {
//     "id": 11504,
//     "title": "quotations from bartlett's",
//     "clues_count": 10
//   },
//   {
//     "id": 11544,
//     "title": "the state it's in",
//     "clues_count": 5
//   },
//   {
//     "id": 11521,
//     "title": "\"hot\" stufff",
//     "clues_count": 5
//   },
//   {
//     "id": 7580,
//     "title": "animal words & phrases",
//     "clues_count": 15
//   }
// ]

function App() {
  const [categories, setCategories] = useState([])
  const [offset, setOffset] = useState(0);
  const count =
  useEffect(() => {
    fetch('https://jservice.io/api/categories?count=8&offset=${offset}')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [offset])

  const handleNext = () => {
    if (categories.length = count) {
      setOffset(offset + count)
      setCategories(data)
    }
  }

  const handlePrev = () => {
    if (offset != 0) {
      // setOffset(offset - count)
    }
  }

  return (
    <>
      <Header title="Super Quiz" />
      <main>
        <h2>Categories</h2>
        <section>
          {categories
            .slice(offset, offset + count)
            .map(({id, title, clues_count}) => 
                    <Category key={id} title={title} cluesCount={clues_count}/>
            )}
        </section>
        <nav>
          <button disabled={offset == 0} onClick={handlePrev}>&laquo; Previous</button>
          <button disabled={offset == categories.length - count} onClick={handleNext}>Next &raquo;</button>
        </nav>
      </main>
    </>
  );
}

export default App;


