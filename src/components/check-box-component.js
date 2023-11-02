import React, { useState } from 'react'

import './check-box-component.css'

const CheckBoxComponent = (props) => {
  const [check, setCheck] = useState(false)
  return (
    <div
      onClick={() => setCheck(!check)}
      className="check-box-component-check-box-component"
    >
      {check && (
        <div className="check-box-component-container">
          <svg viewBox="0 0 1024 1024" className="icon_15">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default CheckBoxComponent
