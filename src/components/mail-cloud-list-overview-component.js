import React, { useState } from 'react'

import './mail-cloud-list-overview-component.css'

const MailCloudListOverviewComponent = (props) => {
  const [list, setList] = useState('campaigns')
  return (
    <div className="mail-cloud-list-overview-component-mail-cloud-list-overview-component">
      <div className="mail-cloud-list-overview-component-container">
        <div className="mail-cloud-list-overview-component-container01">
          <div className="mail-cloud-list-overview-component-container02 border_bottom">
            <span className="mail-cloud-list-overview-component-text">
              Campaign
            </span>
          </div>
          <div className="mail-cloud-list-overview-component-container03">
            <div className="mail-cloud-list-overview-component-container04 border_bottom">
              <div className="mail-cloud-list-overview-component-container05">
                <span className="mail-cloud-list-overview-component-text01">
                  Campaign
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container06">
                <span className="mail-cloud-list-overview-component-text02">
                  Contacted
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container07 border_bottom">
              <div className="mail-cloud-list-overview-component-container08">
                <span className="mail-cloud-list-overview-component-text03">
                  Up2Data, 0-25 MA, Founder, Germany
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container09">
                <span className="mail-cloud-list-overview-component-text04">
                  611
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mail-cloud-list-overview-component-container10">
          <div className="mail-cloud-list-overview-component-container11 border_bottom">
            <span className="mail-cloud-list-overview-component-text05">
              List overview
            </span>
            <div className="mail-cloud-list-overview-component-container12">
              {list === 'campaigns' && (
                <div className="mail-cloud-list-overview-component-container13">
                  <span>Campaigns</span>
                </div>
              )}
              {list === 'accounts' && (
                <div
                  onClick={() => setList('campaigns')}
                  className="mail-cloud-list-overview-component-container14"
                >
                  <span>Campaigns</span>
                </div>
              )}
              {list === 'accounts' && (
                <div className="mail-cloud-list-overview-component-container15">
                  <span>Accounts</span>
                </div>
              )}
              {list === 'campaigns' && (
                <div
                  onClick={() => setList('accounts')}
                  className="mail-cloud-list-overview-component-container16"
                >
                  <span>Accounts</span>
                </div>
              )}
            </div>
          </div>
          {list === 'campaigns' && (
            <div className="mail-cloud-list-overview-component-container17">
              <div className="mail-cloud-list-overview-component-container18 border_bottom">
                <div className="mail-cloud-list-overview-component-container19">
                  <span className="mail-cloud-list-overview-component-text10">
                    Campaign
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container20">
                  <span className="mail-cloud-list-overview-component-text11">
                    Contacted
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container21">
                  <span className="mail-cloud-list-overview-component-text12">
                    Opened
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container22">
                  <span className="mail-cloud-list-overview-component-text13">
                    Link Clicked
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container23">
                  <span className="mail-cloud-list-overview-component-text14">
                    Replied
                  </span>
                </div>
              </div>
              <div className="mail-cloud-list-overview-component-container24 border_bottom">
                <div className="mail-cloud-list-overview-component-container25">
                  <span className="mail-cloud-list-overview-component-text15">
                    Up2Data, 0-25 MA, Founder, Germany
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container26">
                  <span className="mail-cloud-list-overview-component-text16">
                    611
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container27">
                  <span className="mail-cloud-list-overview-component-text17">
                    407
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container28">
                  <span className="mail-cloud-list-overview-component-text18">
                    0
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container29">
                  <span className="mail-cloud-list-overview-component-text19">
                    0
                  </span>
                </div>
              </div>
            </div>
          )}
          {list === 'accounts' && (
            <div className="mail-cloud-list-overview-component-container30">
              <div className="mail-cloud-list-overview-component-container31 border_bottom">
                <div className="mail-cloud-list-overview-component-container32">
                  <span className="mail-cloud-list-overview-component-text20">
                    Sending account
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container33">
                  <span className="mail-cloud-list-overview-component-text21">
                    Contacted
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container34">
                  <span className="mail-cloud-list-overview-component-text22">
                    Opened
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container35">
                  <span className="mail-cloud-list-overview-component-text23">
                    Replied
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container36">
                  <span className="mail-cloud-list-overview-component-text24">
                    Combined score
                  </span>
                </div>
              </div>
              <div className="mail-cloud-list-overview-component-container37 border_bottom">
                <div className="mail-cloud-list-overview-component-container38">
                  <span className="mail-cloud-list-overview-component-text25">
                    daniel.d@up2data.today
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container39">
                  <span className="mail-cloud-list-overview-component-text26">
                    70
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container40">
                  <span className="mail-cloud-list-overview-component-text27">
                    49
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container41">
                  <span className="mail-cloud-list-overview-component-text28">
                    11
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container42">
                  <span className="mail-cloud-list-overview-component-text29">
                    36.6
                  </span>
                </div>
              </div>
              <div className="mail-cloud-list-overview-component-container43 border_bottom">
                <div className="mail-cloud-list-overview-component-container44">
                  <span className="mail-cloud-list-overview-component-text30">
                    daniel.d@up2data.today
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container45">
                  <span className="mail-cloud-list-overview-component-text31">
                    70
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container46">
                  <span className="mail-cloud-list-overview-component-text32">
                    49
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container47">
                  <span className="mail-cloud-list-overview-component-text33">
                    11
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container48">
                  <span className="mail-cloud-list-overview-component-text34">
                    36.6
                  </span>
                </div>
              </div>
              <div className="mail-cloud-list-overview-component-container49 border_bottom">
                <div className="mail-cloud-list-overview-component-container50">
                  <span className="mail-cloud-list-overview-component-text35">
                    daniel.d@up2data.today
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container51">
                  <span className="mail-cloud-list-overview-component-text36">
                    70
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container52">
                  <span className="mail-cloud-list-overview-component-text37">
                    49
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container53">
                  <span className="mail-cloud-list-overview-component-text38">
                    11
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container54">
                  <span className="mail-cloud-list-overview-component-text39">
                    36.6
                  </span>
                </div>
              </div>
              <div className="mail-cloud-list-overview-component-container55 border_bottom">
                <div className="mail-cloud-list-overview-component-container56">
                  <span className="mail-cloud-list-overview-component-text40">
                    daniel.d@up2data.today
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container57">
                  <span className="mail-cloud-list-overview-component-text41">
                    70
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container58">
                  <span className="mail-cloud-list-overview-component-text42">
                    49
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container59">
                  <span className="mail-cloud-list-overview-component-text43">
                    11
                  </span>
                </div>
                <div className="mail-cloud-list-overview-component-container60">
                  <span className="mail-cloud-list-overview-component-text44">
                    36.6
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MailCloudListOverviewComponent
