import React from 'react'


    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact)  => (
            <div style={{textAlign: "left"}}>
                
                
                <p><span style={{fontWeight:900, margin:"20px"}}>{contact.id}</span><a href=" ">{contact.name}</a></p>
            
              
            </div>
          ))}
        </div>
      )
    };

export default Contacts