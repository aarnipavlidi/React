import React from 'react'

const Notification = ({ message, checkStatus }) => {

  if (message != null && checkStatus === false ) {
    return (
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    )
  }

  if (message != null && checkStatus === true) {
    return (
      <div className="alert alert-success" role="alert">
        {message}
      </div>
    )
  }

  return null
}

export default Notification
