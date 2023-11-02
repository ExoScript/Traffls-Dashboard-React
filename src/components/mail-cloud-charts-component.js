import React from 'react'

import './mail-cloud-charts-component.css'

const MailCloudChartsComponent = (props) => {
  return (
    <div className="mail-cloud-charts-component-mail-cloud-charts-component">
      <div className="mail-cloud-charts-component-container border_bottom">
        <div className="mail-cloud-charts-component-container1">
          <span className="mail-cloud-charts-component-text">Charts</span>
        </div>
        <div className="mail-cloud-charts-component-container2">
          <div className="mail-cloud-charts-component-container3">
            <svg
              viewBox="0 0 1024 1024"
              className="mail-cloud-charts-component-icon"
            >
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
          </div>
          <div className="mail-cloud-charts-component-container4">
            <span className="mail-cloud-charts-component-text1">Jun</span>
            <span className="mail-cloud-charts-component-text2">-</span>
            <span className="mail-cloud-charts-component-text3">Feb</span>
          </div>
          <div className="mail-cloud-charts-component-container5">
            <svg
              viewBox="0 0 1024 1024"
              className="mail-cloud-charts-component-icon2"
            >
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mail-cloud-charts-component-chart-content"></div>
    </div>
  )
}

export default MailCloudChartsComponent
