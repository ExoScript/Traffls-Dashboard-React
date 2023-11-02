import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import FilterDropdownInboxComponent from '../components/filter-dropdown-inbox-component'
import './mail-cloud-inbox.css'

const MailCloudInbox = (props) => {
  return (
    <div className="mail-cloud-inbox-container">
      <Helmet>
        <title>Mail-Cloud-Inbox - Traffls-Dashboard</title>
        <meta
          property="og:title"
          content="Mail-Cloud-Inbox - Traffls-Dashboard"
        />
      </Helmet>
      <div className="mail-cloud-inbox-container01">
        <MenuComponent></MenuComponent>
        <div className="mail-cloud-inbox-container02 border_right">
          <div className="mail-cloud-inbox-container03 border_bottom">
            <div className="mail-cloud-inbox-container04">
              <span className="mail-cloud-inbox-text">Client ID: </span>
              <span className="mail-cloud-inbox-text01">132435</span>
            </div>
            <div className="mail-cloud-inbox-container05">
              <span className="mail-cloud-inbox-text02">Search</span>
            </div>
          </div>
          <div className="mail-cloud-inbox-container06">
            <div className="mail-cloud-inbox-top-titel-component">
              <div className="mail-cloud-inbox-container07">
                <div className="mail-cloud-inbox-container08">
                  <span className="mail-cloud-inbox-text03">Mail cloud</span>
                  <span className="mail-cloud-inbox-text04">-</span>
                  <Link to="/page" className="mail-cloud-inbox-navlink">
                    Inbox
                  </Link>
                </div>
                <div className="mail-cloud-inbox-container09">
                  <FilterDropdownInboxComponent rootClassName="filter-dropdown-inbox-component-root-class-name1"></FilterDropdownInboxComponent>
                </div>
              </div>
            </div>
            <div className="mail-cloud-inbox-container10">
              <div className="mail-cloud-inbox-container11 box-shadow">
                <div className="mail-cloud-inbox-container12 border_bottom">
                  <span className="mail-cloud-inbox-text05">Messages</span>
                </div>
                <div className="mail-cloud-inbox-container13">
                  <div className="mail-cloud-inbox-container14 border_bottom">
                    <div className="mail-cloud-inbox-container15">
                      <span className="mail-cloud-inbox-text06">
                        walter@biss-fest.com
                      </span>
                      <span className="mail-cloud-inbox-text07">
                        Oct 31, 2023
                      </span>
                    </div>
                    <span className="mail-cloud-inbox-text08 opacity_06">
                      <span>
                        Re: Um Outbound zu testen, kann man auch zunächst lean
                        starten
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Top! Danke Dann, wenn soweit ist, lass uns noch in den
                        Ve...
                      </span>
                    </span>
                    <div className="mail-cloud-inbox-container16">
                      <span className="mail-cloud-inbox-text13">Status</span>
                    </div>
                  </div>
                  <div className="mail-cloud-inbox-container17 border_bottom">
                    <div className="mail-cloud-inbox-container18">
                      <span className="mail-cloud-inbox-text14">
                        walter@biss-fest.com
                      </span>
                      <span className="mail-cloud-inbox-text15">
                        Oct 31, 2023
                      </span>
                    </div>
                    <span className="mail-cloud-inbox-text16 opacity_06">
                      <span>
                        Re: Um Outbound zu testen, kann man auch zunächst lean
                        starten
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Top! Danke Dann, wenn soweit ist, lass uns noch in den
                        Ve...
                      </span>
                    </span>
                    <div className="mail-cloud-inbox-container19">
                      <span className="mail-cloud-inbox-text21">Status</span>
                    </div>
                  </div>
                  <div className="mail-cloud-inbox-container20 border_bottom">
                    <div className="mail-cloud-inbox-container21">
                      <span className="mail-cloud-inbox-text22">
                        walter@biss-fest.com
                      </span>
                      <span className="mail-cloud-inbox-text23">
                        Oct 31, 2023
                      </span>
                    </div>
                    <span className="mail-cloud-inbox-text24 opacity_06">
                      <span>
                        Re: Um Outbound zu testen, kann man auch zunächst lean
                        starten
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Top! Danke Dann, wenn soweit ist, lass uns noch in den
                        Ve...
                      </span>
                    </span>
                    <div className="mail-cloud-inbox-container22">
                      <span className="mail-cloud-inbox-text29">Status</span>
                    </div>
                  </div>
                  <div className="mail-cloud-inbox-container23 border_bottom">
                    <div className="mail-cloud-inbox-container24">
                      <span className="mail-cloud-inbox-text30">
                        walter@biss-fest.com
                      </span>
                      <span className="mail-cloud-inbox-text31">
                        Oct 31, 2023
                      </span>
                    </div>
                    <span className="mail-cloud-inbox-text32 opacity_06">
                      <span>
                        Re: Um Outbound zu testen, kann man auch zunächst lean
                        starten
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Top! Danke Dann, wenn soweit ist, lass uns noch in den
                        Ve...
                      </span>
                    </span>
                    <div className="mail-cloud-inbox-container25">
                      <span className="mail-cloud-inbox-text37">Status</span>
                    </div>
                  </div>
                  <div className="mail-cloud-inbox-container26 border_bottom">
                    <div className="mail-cloud-inbox-container27">
                      <span className="mail-cloud-inbox-text38">
                        walter@biss-fest.com
                      </span>
                      <span className="mail-cloud-inbox-text39">
                        Oct 31, 2023
                      </span>
                    </div>
                    <span className="mail-cloud-inbox-text40 opacity_06">
                      <span>
                        Re: Um Outbound zu testen, kann man auch zunächst lean
                        starten
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Top! Danke Dann, wenn soweit ist, lass uns noch in den
                        Ve...
                      </span>
                    </span>
                    <div className="mail-cloud-inbox-container28">
                      <span className="mail-cloud-inbox-text45">Status</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mail-cloud-inbox-container29 box-shadow">
                <div className="mail-cloud-inbox-container30 border_bottom">
                  <span className="mail-cloud-inbox-text46">Messages</span>
                </div>
                <div className="mail-cloud-inbox-container31"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailCloudInbox
