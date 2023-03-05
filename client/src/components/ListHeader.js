import React from 'react'

function ListHeader({listName }) {
  const signOut = () => {
    console.log('singOut')
  }

  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create'>ADD NEW</button>
        <button className='signout' onClick={signOut}>Sign Out</button>
        
      </div>
    </div>
  )
}

export default ListHeader