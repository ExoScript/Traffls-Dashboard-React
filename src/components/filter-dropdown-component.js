import React, { useState } from 'react'

import PropTypes from 'prop-types'

import CheckBoxComponent from './check-box-component'
import './filter-dropdown-component.css'

const FilterDropdownComponent = (props) => {
  const [campaign_selector, setCampaign_selector] = useState(false)
  const [filter, setFilter] = useState(false)
  return (
    <div className="filter-dropdown-component-filter-dropdown-component">
      <div
        onClick={() => setFilter(!filter)}
        className="filter-dropdown-component-container"
      >
        <svg viewBox="0 0 1024 1024" className="filter-dropdown-component-icon">
          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
        </svg>
        <span>Filter</span>
        <div className="filter-dropdown-component-container01">
          <span className="filter-dropdown-component-text01">1</span>
        </div>
      </div>
      {filter && (
        <div className="filter-dropdown-component-container02 box-shadow">
          <div className="filter-dropdown-component-container03 border_bottom">
            <span className="filter-dropdown-component-text02">Filter</span>
            <div
              onClick={() => {
                setCampaign_selector(false)
                setFilter(false)
              }}
              className="filter-dropdown-component-container04"
            >
              <span className="filter-dropdown-component-text03">Save</span>
            </div>
          </div>
          <div className="filter-dropdown-component-container05 border_bottom">
            <span className="filter-dropdown-component-text04 opacity_06">
              By campaign:
            </span>
            {!campaign_selector && (
              <div
                onClick={() => setCampaign_selector(true)}
                className="filter-dropdown-component-container06"
              >
                <span className="filter-dropdown-component-text05 opacity_06">
                  All campaigns
                </span>
                <svg viewBox="0 0 1024 1024" className="icon_15">
                  <path d="M512 776l136-136 60 60-196 196-196-196 60-60zM512 248l-136 136-60-60 196-196 196 196-60 60z"></path>
                </svg>
              </div>
            )}
            {campaign_selector && (
              <div
                onClick={() => setCampaign_selector(false)}
                className="filter-dropdown-component-container07 linear-gradient"
              >
                <span className="filter-dropdown-component-text06">
                  All campaigns
                </span>
                <svg viewBox="0 0 1024 1024" className="icon_15">
                  <path d="M512 776l136-136 60 60-196 196-196-196 60-60zM512 248l-136 136-60-60 196-196 196 196-60 60z"></path>
                </svg>
              </div>
            )}
            {campaign_selector && (
              <div className="filter-dropdown-component-container08">
                <div className="filter-dropdown-component-container09">
                  <div className="filter-dropdown-component-container10 border_bottom">
                    <div className="filter-dropdown-component-container11">
                      <span className="filter-dropdown-component-text07 opacity_06">
                        All campaigns
                      </span>
                    </div>
                    <CheckBoxComponent></CheckBoxComponent>
                  </div>
                  <div className="filter-dropdown-component-container12 border_bottom">
                    <div className="filter-dropdown-component-container13">
                      <span className="filter-dropdown-component-text08 opacity_06">
                        Up2Data, 0-25 MA, Founder, Germany
                      </span>
                    </div>
                    <CheckBoxComponent></CheckBoxComponent>
                  </div>
                  <div className="filter-dropdown-component-container14 border_bottom">
                    <div className="filter-dropdown-component-container15">
                      <span className="filter-dropdown-component-text09 opacity_06">
                        Up2Data, 0-25 MA, Founder, Germany
                      </span>
                    </div>
                    <CheckBoxComponent></CheckBoxComponent>
                  </div>
                  <div className="filter-dropdown-component-container16 border_bottom">
                    <div className="filter-dropdown-component-container17">
                      <span className="filter-dropdown-component-text10 opacity_06">
                        Up2Data, 0-25 MA, Founder, Germany
                      </span>
                    </div>
                    <CheckBoxComponent></CheckBoxComponent>
                  </div>
                  <div className="filter-dropdown-component-container18 border_bottom">
                    <div className="filter-dropdown-component-container19">
                      <span className="filter-dropdown-component-text11 opacity_06">
                        Up2Data, 0-25 MA, Founder, Germany
                      </span>
                    </div>
                    <CheckBoxComponent></CheckBoxComponent>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="filter-dropdown-component-container20">
            <div className="filter-dropdown-component-container21 border_bottom">
              <span className="filter-dropdown-component-text12 opacity_06">
                Complete
              </span>
              <CheckBoxComponent></CheckBoxComponent>
            </div>
            <div className="filter-dropdown-component-container22 border_bottom">
              <span className="filter-dropdown-component-text13 opacity_06">
                Contacted
              </span>
              <CheckBoxComponent></CheckBoxComponent>
            </div>
            <div className="filter-dropdown-component-container23 border_bottom">
              <span className="filter-dropdown-component-text14 opacity_06">
                Unsubscribe
              </span>
              <CheckBoxComponent></CheckBoxComponent>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

FilterDropdownComponent.defaultProps = {
  text: '1',
}

FilterDropdownComponent.propTypes = {
  text: PropTypes.string,
}

export default FilterDropdownComponent
