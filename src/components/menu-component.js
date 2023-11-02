import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-component.css'

const MenuComponent = (props) => {
  const [mailCloud, setMailCloud] = useState(true)
  const [nearCloud, setNearCloud] = useState(false)
  return (
    <div className="menu-component-menu-component">
      <div className="menu-component-container border_bottom">
        <div className="menu-component-container01">
          <div className="menu-component-container02">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="menu-component-image"
            />
          </div>
          <div className="menu-component-container03">
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="menu-component-image1"
            />
          </div>
        </div>
        <div className="menu-component-container04">
          <svg
            viewBox="0 0 1024 1024"
            className="menu-component-icon opacity_06"
          >
            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
          <span className="menu-component-text opacity_06">Search</span>
        </div>
      </div>
      <div className="menu-component-container05 border_bottom">
        <div className="menu-component-container06">
          <div
            onClick={() => {
              setNearCloud(false)
              setMailCloud(!mailCloud)
            }}
            className="menu-component-container07"
          >
            <div className="menu-component-container08">
              <svg viewBox="0 0 1024 1024" className="icon_18">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <span>Mail-Cloud</span>
            </div>
            <div className="menu-component-container09">
              {!mailCloud && (
                <svg viewBox="0 0 1024 1024" className="icon_15 opacity_06">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              )}
              {mailCloud && (
                <svg viewBox="0 0 1024 1024" className="icon_15 opacity_06">
                  <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                </svg>
              )}
            </div>
          </div>
          {mailCloud && (
            <div className="menu-component-container10">
              <div className="menu-component-container11">
                <div className="menu-component-container12"></div>
              </div>
              <div className="menu-component-container13">
                <Link to="/" className="menu-component-navlink">
                  <div className="menu-component-container14">
                    <span>Overview</span>
                  </div>
                </Link>
                <Link
                  to="/mail-cloud-accounts"
                  className="menu-component-navlink1"
                >
                  <div className="menu-component-container15">
                    <span>Accounts</span>
                  </div>
                </Link>
                <div className="menu-component-container16">
                  <span>Campaigns</span>
                </div>
                <Link
                  to="/mail-cloud-leads"
                  className="menu-component-navlink2"
                >
                  <div className="menu-component-container17">
                    <span>Leads</span>
                  </div>
                </Link>
                <Link
                  to="/mail-cloud-inbox"
                  className="menu-component-navlink3"
                >
                  <div className="menu-component-container18">
                    <span>Inbox</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="menu-component-container19">
          <div
            onClick={() => {
              setNearCloud(!nearCloud)
              setMailCloud(false)
            }}
            className="menu-component-container20"
          >
            <div className="menu-component-container21">
              <svg viewBox="0 0 1024 1024" className="icon_18">
                <path d="M597.333 170.667c0-47.147-38.229-85.333-85.333-85.333s-85.333 38.187-85.333 85.333v512h170.667v-512z"></path>
                <path d="M810.667 341.333c0-47.147-38.229-85.333-85.333-85.333s-85.333 38.187-85.333 85.333v341.333h170.667v-341.333z"></path>
                <path d="M384 469.333c0-47.147-38.229-85.333-85.333-85.333s-85.333 38.187-85.333 85.333v213.333h170.667v-213.333z"></path>
                <path d="M810.667 810.667h-597.333c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h597.333c23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667z"></path>
              </svg>
              <span>Near-Cloud</span>
            </div>
            <div className="menu-component-container22">
              {!nearCloud && (
                <svg viewBox="0 0 1024 1024" className="icon_15 opacity_06">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              )}
              {nearCloud && (
                <svg viewBox="0 0 1024 1024" className="icon_15 opacity_06">
                  <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                </svg>
              )}
            </div>
          </div>
          {nearCloud && (
            <div className="menu-component-container23">
              <div className="menu-component-container24">
                <div className="menu-component-container25"></div>
              </div>
              <div className="menu-component-container26">
                <div className="menu-component-container27">
                  <span>Overview</span>
                </div>
                <div className="menu-component-container28">
                  <span>Accounts</span>
                </div>
                <div className="menu-component-container29">
                  <span>Campaigns</span>
                </div>
                <div className="menu-component-container30">
                  <span>Leads</span>
                </div>
                <div className="menu-component-container31">
                  <span>Inbox</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="menu-component-container32">
        <div className="menu-component-container33">
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

MenuComponent.defaultProps = {
  image_alt2: 'image',
  image_alt1: 'image',
  text: 'Logout',
  image_alt: 'image',
  image_src1: '6165b145-2d1d-4526-aaaf-b17f760d7a49',
  image_src: '/logo_3-200h.png',
  image_src2: '/logo_2-200h.png',
}

MenuComponent.propTypes = {
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
}

export default MenuComponent
