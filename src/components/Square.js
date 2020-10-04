import React from 'react'

export default function Square(props) {
    const { value, onClick } = props
    const style = value ? `squares ${value}` : "squares"

    return (
        <>
          <button className={ style } onClick={ onClick }>
              { value }
          </button>
        </>
    )
}
