import React, { useState } from 'react'

import PropTypes from 'prop-types'

import CheckBoxComponent from './check-box-component'
import SelectBoxComponent from './select-box-component'
import './filter-dropdown-inbox-component.css'

const FilterDropdownInboxComponent = (props) => {
  const [campaign_selector, setCampaign_selector] = useState(false)
  const [filter, setFilter] = useState(false)
  const [status_selector, setStatus_selector] = useState(true)
  return (
    <div
      className={`filter-dropdown-inbox-component-filter-dropdown-component ${props.rootClassName} `}
    >
      <div
        onClick={() => setFilter(!filter)}
        className="filter-dropdown-inbox-component-container"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="filter-dropdown-inbox-component-icon"
        >
          <path
            d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"
            className=""
          ></path>
        </svg>
        <span className="">Filter</span>
        <div className="filter-dropdown-inbox-component-container01">
          <span className="filter-dropdown-inbox-component-text01">1</span>
        </div>
      </div>
      {filter && (
        <div className="filter-dropdown-inbox-component-container02 box-shadow">
          <div className="filter-dropdown-inbox-component-container03 border_bottom box-shadow-botton linear-gradient">
            <span className="filter-dropdown-inbox-component-text02">
              <span className="">
                Inbox
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="filter-dropdown-inbox-component-text04">
                filter
              </span>
            </span>
            <div
              onClick={() => {
                setStatus_selector(true)
                setCampaign_selector(false)
                setFilter(false)
              }}
              className="filter-dropdown-inbox-component-container04"
            >
              <span className="filter-dropdown-inbox-component-text05">
                Reset
              </span>
            </div>
          </div>
          <div className="filter-dropdown-inbox-component-container05 border_bottom">
            <span className="filter-dropdown-inbox-component-text06">
              By campaign:
            </span>
            <div className="filter-dropdown-inbox-component-container06">
              <div className="filter-dropdown-inbox-component-container07">
                {!campaign_selector && (
                  <div
                    onClick={() => {
                      setStatus_selector(false)
                      setCampaign_selector(true)
                    }}
                    className="filter-dropdown-inbox-component-container08"
                  >
                    <span className="filter-dropdown-inbox-component-text07 opacity_06">
                      All campaigns
                    </span>
                    <svg viewBox="0 0 1024 1024" className="icon_15">
                      <path
                        d="M512 776l136-136 60 60-196 196-196-196 60-60zM512 248l-136 136-60-60 196-196 196 196-60 60z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                )}
                {campaign_selector && (
                  <div className="filter-dropdown-inbox-component-container09">
                    <div
                      onClick={() => {
                        setCampaign_selector(false)
                        setStatus_selector(true)
                      }}
                      className="filter-dropdown-inbox-component-container10 linear-gradient"
                    >
                      <span className="filter-dropdown-inbox-component-text08">
                        All campaigns
                      </span>
                      <svg viewBox="0 0 1024 1024" className="icon_15">
                        <path
                          d="M512 776l136-136 60 60-196 196-196-196 60-60zM512 248l-136 136-60-60 196-196 196 196-60 60z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                    <div className="filter-dropdown-inbox-component-container11">
                      <input
                        type="text"
                        placeholder="Search by campaign name"
                        className="filter-dropdown-inbox-component-textinput"
                      />
                    </div>
                  </div>
                )}
              </div>
              {campaign_selector && (
                <div className="filter-dropdown-inbox-component-container12">
                  <div className="filter-dropdown-inbox-component-container13">
                    <div className="filter-dropdown-inbox-component-container14 border_bottom">
                      <div className="filter-dropdown-inbox-component-container15">
                        <span className="filter-dropdown-inbox-component-text09 opacity_06">
                          All campaigns
                        </span>
                      </div>
                      <CheckBoxComponent className=""></CheckBoxComponent>
                    </div>
                    <div className="filter-dropdown-inbox-component-container16 border_bottom">
                      <div className="filter-dropdown-inbox-component-container17">
                        <span className="filter-dropdown-inbox-component-text10 opacity_06">
                          Up2Data, 0-25 MA, Founder, Germany
                        </span>
                      </div>
                      <CheckBoxComponent className=""></CheckBoxComponent>
                    </div>
                    <div className="filter-dropdown-inbox-component-container18 border_bottom">
                      <div className="filter-dropdown-inbox-component-container19">
                        <span className="filter-dropdown-inbox-component-text11 opacity_06">
                          Founder, Germany
                        </span>
                      </div>
                      <CheckBoxComponent className=""></CheckBoxComponent>
                    </div>
                    <div className="filter-dropdown-inbox-component-container20 border_bottom">
                      <div className="filter-dropdown-inbox-component-container21">
                        <span className="filter-dropdown-inbox-component-text12 opacity_06">
                          CEO and Founder
                        </span>
                      </div>
                      <CheckBoxComponent className=""></CheckBoxComponent>
                    </div>
                    <div className="filter-dropdown-inbox-component-container22 border_bottom">
                      <div className="filter-dropdown-inbox-component-container23">
                        <span className="filter-dropdown-inbox-component-text13 opacity_06">
                          Up2Data, 0-25 MA, Founder, Germany
                        </span>
                      </div>
                      <CheckBoxComponent className=""></CheckBoxComponent>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="filter-dropdown-inbox-component-container24 border_bottom">
            <div className="filter-dropdown-inbox-component-container25">
              <span className="filter-dropdown-inbox-component-text14">
                By status:
              </span>
              {!status_selector && (
                <svg
                  viewBox="0 0 1024 1024"
                  onClick={() => {
                    setStatus_selector(true)
                    setCampaign_selector(false)
                  }}
                  className="filter-dropdown-inbox-component-icon06 icon_15"
                >
                  <path
                    d="M512 776l136-136 60 60-196 196-196-196 60-60zM512 248l-136 136-60-60 196-196 196 196-60 60z"
                    className=""
                  ></path>
                </svg>
              )}
              {status_selector && (
                <svg
                  viewBox="0 0 1024 1024"
                  onClick={() => {
                    setStatus_selector(false)
                    setCampaign_selector(true)
                  }}
                  className="filter-dropdown-inbox-component-icon08 icon_15"
                >
                  <path
                    d="M708 230l-196 196-196-196 60-60 136 136 136-136zM316 794l196-196 196 196-60 60-136-136-136 136z"
                    className=""
                  ></path>
                </svg>
              )}
            </div>
            {status_selector && (
              <div className="filter-dropdown-inbox-component-container26">
                <div className="filter-dropdown-inbox-component-container27">
                  <SelectBoxComponent
                    name="Interested"
                    className=""
                  ></SelectBoxComponent>
                  <SelectBoxComponent
                    name="Meeting booked"
                    className=""
                  ></SelectBoxComponent>
                  <SelectBoxComponent
                    name="Closed"
                    className=""
                  ></SelectBoxComponent>
                </div>
                <div className="filter-dropdown-inbox-component-container28">
                  <SelectBoxComponent
                    name="Meeting completed"
                    className=""
                  ></SelectBoxComponent>
                  <SelectBoxComponent
                    name="Out of office"
                    className=""
                  ></SelectBoxComponent>
                </div>
                <div className="filter-dropdown-inbox-component-container29">
                  <SelectBoxComponent
                    name="Not interested"
                    className=""
                  ></SelectBoxComponent>
                  <SelectBoxComponent
                    name="Wrong person"
                    className=""
                  ></SelectBoxComponent>
                </div>
              </div>
            )}
          </div>
          <div className="filter-dropdown-inbox-component-container30">
            <div className="filter-dropdown-inbox-component-container31">
              <span className="filter-dropdown-inbox-component-text15">
                From date:
              </span>
              <span className="filter-dropdown-inbox-component-text16">
                To date:
              </span>
            </div>
            <div className="filter-dropdown-inbox-component-container32">
              <div className="filter-dropdown-inbox-component-container33">
                <input
                  type="text"
                  placeholder="01.02.2024"
                  className="filter-dropdown-inbox-component-textinput1"
                />
              </div>
              <div className="filter-dropdown-inbox-component-container34"></div>
              <div className="filter-dropdown-inbox-component-container35">
                <input
                  type="text"
                  placeholder="01.02.2024"
                  className="filter-dropdown-inbox-component-textinput2"
                />
              </div>
            </div>
          </div>
          <div className="filter-dropdown-inbox-component-container36 border_top">
            <div className="filter-dropdown-inbox-component-container37">
              <span className="">Reset</span>
            </div>
            <div className="filter-dropdown-inbox-component-container38 linear-gradient">
              <span className="">Save filter</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

FilterDropdownInboxComponent.defaultProps = {
  rootClassName: '',
}

FilterDropdownInboxComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default FilterDropdownInboxComponent
