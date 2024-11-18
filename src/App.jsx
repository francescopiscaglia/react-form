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
        <form>
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
        <ul className='list-group'>

          {allPosts.map((post, index) => <li key={index} className='list-group-item d-flex justify-content-between'>{post}</li>)}

        </ul>
      </div>



    </>
  );
};

export default App
