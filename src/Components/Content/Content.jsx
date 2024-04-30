import React from 'react'

const Content = (props) => {
  return (
    <div>
        <p>
          {props.name} : {props.exercise}
        </p>
    </div>
  )
}

export default Content
