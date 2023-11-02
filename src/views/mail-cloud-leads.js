import React from 'react'

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import TopTitelComponent from '../components/top-titel-component'
import './mail-cloud-leads.css'

const MailCloudLeads = (props) => {
  return (
    <div className="mail-cloud-leads-container">
      <Helmet>
        <title>Mail-Cloud-Leads - Traffls-Dashboard</title>
        <meta
          property="og:title"
          content="Mail-Cloud-Leads - Traffls-Dashboard"
        />
      </Helmet>
      <div className="mail-cloud-leads-container01">
        <MenuComponent></MenuComponent>
        <div className="mail-cloud-leads-container02 border_right">
          <div className="mail-cloud-leads-container03 border_bottom">
            <div className="mail-cloud-leads-container04">
              <span className="mail-cloud-leads-text">Client ID: </span>
              <span className="mail-cloud-leads-text01">132435</span>
            </div>
            <div className="mail-cloud-leads-container05">
              <span className="mail-cloud-leads-text02">Search</span>
            </div>
          </div>
          <div className="mail-cloud-leads-container06">
            <TopTitelComponent
              menu="Leads"
              rootClassName="top-titel-component-root-class-name2"
            ></TopTitelComponent>
            <div className="mail-cloud-leads-container07">
              <div className="mail-cloud-leads-container08">
                <div className="mail-cloud-leads-container09 border_bottom">
                  <span className="mail-cloud-leads-text03"> Charts</span>
                  <div className="mail-cloud-leads-container10">
                    <div className="mail-cloud-leads-container11">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mail-cloud-leads-icon"
                      >
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </div>
                    <div className="mail-cloud-leads-container12">
                      <span className="mail-cloud-leads-text04">Jun</span>
                      <span className="mail-cloud-leads-text05">-</span>
                      <span className="mail-cloud-leads-text06">Feb</span>
                    </div>
                    <div className="mail-cloud-leads-container13">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mail-cloud-leads-icon2"
                      >
                        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mail-cloud-leads-container14"></div>
              </div>
              <div className="mail-cloud-leads-container15">
                <div className="mail-cloud-leads-container16 border_bottom">
                  <span className="mail-cloud-leads-text07">Performance</span>
                </div>
                <div className="mail-cloud-leads-container17">
                  <div className="mail-cloud-leads-container18 border_bottom">
                    <span className="mail-cloud-leads-text08">Total leads</span>
                    <span className="mail-cloud-leads-text09">661</span>
                  </div>
                  <div className="mail-cloud-leads-container19 border_bottom">
                    <span className="mail-cloud-leads-text10">Contacted</span>
                    <span className="mail-cloud-leads-text11">661</span>
                  </div>
                  <div className="mail-cloud-leads-container20 border_bottom">
                    <span className="mail-cloud-leads-text12">Unsubscribe</span>
                    <span className="mail-cloud-leads-text13">661</span>
                  </div>
                  <div className="mail-cloud-leads-container21 border_bottom">
                    <span className="mail-cloud-leads-text14">Bounce</span>
                    <div className="mail-cloud-leads-container22">
                      <span className="mail-cloud-leads-text15">344</span>
                      <div className="mail-cloud-leads-container23"></div>
                      <span className="mail-cloud-leads-text16">11.8%</span>
                    </div>
                  </div>
                  <div className="mail-cloud-leads-container24 border_bottom">
                    <span className="mail-cloud-leads-text17">Completed</span>
                    <span className="mail-cloud-leads-text18">661</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mail-cloud-leads-container25">
              <div className="mail-cloud-leads-container26">
                <div className="mail-cloud-leads-container27 border_bottom">
                  <span className="mail-cloud-leads-text19">
                    Leads overview
                  </span>
                  <div className="mail-cloud-leads-container28">
                    <span className="mail-cloud-leads-text20">
                      Search by name, email or company
                    </span>
                  </div>
                </div>
                <div className="mail-cloud-leads-container29">
                  <div className="mail-cloud-leads-container30 border_bottom">
                    <div className="mail-cloud-leads-container31 border_right">
                      <span className="mail-cloud-leads-text21">Email</span>
                    </div>
                    <div className="mail-cloud-leads-container32 border_right">
                      <span className="mail-cloud-leads-text22">Campaign</span>
                    </div>
                    <div className="mail-cloud-leads-container33 border_right">
                      <span className="mail-cloud-leads-text23">Contact</span>
                    </div>
                    <div className="mail-cloud-leads-container34 border_right">
                      <span className="mail-cloud-leads-text24">Company</span>
                    </div>
                    <div className="mail-cloud-leads-container35 border_right">
                      <span className="mail-cloud-leads-text25">Website</span>
                    </div>
                  </div>
                  <div className="mail-cloud-leads-container36">
                    <div className="mail-cloud-leads-container37 border_bottom">
                      <div className="mail-cloud-leads-container38 border_right">
                        <span className="mail-cloud-leads-text26">
                          marcel@rabbitai.de
                        </span>
                      </div>
                      <div className="mail-cloud-leads-container39 border_right">
                        <span className="mail-cloud-leads-text27 opacity_06">
                          611
                        </span>
                      </div>
                      <div className="mail-cloud-leads-container40 border_right">
                        <span className="mail-cloud-leads-text28 opacity_06">
                          Marcel Gutsche
                        </span>
                      </div>
                      <div className="mail-cloud-leads-container41 border_right">
                        <span className="mail-cloud-leads-text29 opacity_06">
                          rabbitAI
                        </span>
                      </div>
                      <div className="mail-cloud-leads-container42 border_right">
                        <span className="mail-cloud-leads-text30 opacity_06">
                          http://rabbitai.de
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailCloudLeads
