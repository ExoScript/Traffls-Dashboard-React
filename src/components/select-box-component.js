import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './select-box-component.css'

const SelectBoxComponent = (props) => {
  const [select, setSelect] = useState(false)
  return (
    <div
      onClick={() => setSelect(!select)}
      className="select-box-component-select-box-component box-shadow"
    >
      {!select && (
        <div className="select-box-component-container">
          <span className="select-box-component-text opacity_06">
            {props.name}
          </span>
        </div>
      )}
      {select && (
        <div className="select-box-component-container1 linear-gradient">
          <span className="select-box-component-text1">{props.name}</span>
        </div>
      )}
    </div>
  )
}

SelectBoxComponent.defaultProps = {
  name: 'name',
}

SelectBoxComponent.propTypes = {
  name: PropTypes.string,
}

export default SelectBoxComponent
