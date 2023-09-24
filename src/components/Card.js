import React from 'react'

const Card = ({children}) => {
  return (
    <div className="flex justify-center m-4">
      <div className="bg-teal-200 bg-opacity-70 rounded-lg shadow-md px-4 w-1/2">
        {children}
      </div>
    </div>
  )
}

export default Card
