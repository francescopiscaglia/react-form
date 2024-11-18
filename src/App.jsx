import { useState } from 'react'
import './App.css'
import allPosts from "./db/db.js"

/*

Esercizio
Creare un semplice form con un campo input per il titolo di un articolo del blog. Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.

BONUS
Implementare la funzionalità di modifica del titolo di un post.
Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)

*/

function App() {

  // render
  return (
    <>
      <div className="container">
        <h1>Form</h1>

        {/* new post form */}
        <form >
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Add a post</label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text">Add post title</small>
          </div>

          <button type="submit" className="btn btn-primary">Add</button>
        </form>


        {/* post title list */}
        <ul className='list-group mt-4'>

          {allPosts.map((post, index) => <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
            {post}

            {/* delete a post */}
            <button className='btn btn-outline-secondary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          </li>)}

        </ul>
      </div>



    </>
  );
};

export default App
