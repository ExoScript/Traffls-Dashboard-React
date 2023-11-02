import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import FilterDropdownComponent from './filter-dropdown-component'
import FilterDropdownInboxComponent from './filter-dropdown-inbox-component'
import './top-titel-component.css'

const TopTitelComponent = (props) => {
  const [filter, setFilter] = useState(false)
  return (
    <div
      className={`top-titel-component-top-titel-component ${props.rootClassName} `}
    >
      <div className="top-titel-component-container">
        <div className="top-titel-component-container1">
          <span className="top-titel-component-text">{props.titel}</span>
          <span className="top-titel-component-text1">-</span>
          <Link to="/page" className="top-titel-component-navlink">
            {props.menu}
          </Link>
        </div>
        <div className="top-titel-component-container2">
          <div
            onClick={() => setFilter(!filter)}
            className="top-titel-component-container3"
          >
            <svg viewBox="0 0 1024 1024" className="top-titel-component-icon">
              <path
                d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="top-titel-component-container4 linear-gradient">
            <span className="">Export CSV</span>
          </div>
        </div>
      </div>
      {filter && (
        <div className="top-titel-component-container5">
          <FilterDropdownComponent className=""></FilterDropdownComponent>
          <FilterDropdownInboxComponent
            rootClassName="filter-dropdown-inbox-component-root-class-name"
            className=""
          ></FilterDropdownInboxComponent>
        </div>
      )}
    </div>
  )
}

TopTitelComponent.defaultProps = {
  text4: 'Step',
  menu: 'Overview',
  text1: 'Steps',
  text: 'Text',
  text2: 'Total',
  titel: 'Mail cloud',
  text3: 'Text',
  rootClassName: '',
}

TopTitelComponent.propTypes = {
  text4: PropTypes.string,
  menu: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  titel: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TopTitelComponent
