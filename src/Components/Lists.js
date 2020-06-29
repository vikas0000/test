import React from 'react'

    const Lists = ({ lists }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {lists.map((list)  => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{list.id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{list.title}</h6>
                <p class="card-text">{list.body}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

export default Lists