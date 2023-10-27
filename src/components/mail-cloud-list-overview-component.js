import React, { useState } from 'react'

import './mail-cloud-list-overview-component.css'

const MailCloudListOverviewComponent = (props) => {
  const [list, setList] = useState('campaigns')
  return (
    <div className="mail-cloud-list-overview-component-mail-cloud-list-overview-component">
      <div className="mail-cloud-list-overview-component-container">
        <div className="mail-cloud-list-overview-component-container01 border_bottom">
          <span className="mail-cloud-list-overview-component-text">
            List overview
          </span>
          <div className="mail-cloud-list-overview-component-container02">
            {list === 'campaigns' && (
              <div className="mail-cloud-list-overview-component-container03">
                <span>Campaigns</span>
              </div>
            )}
            {list === 'accounts' && (
              <div
                onClick={() => setList('campaigns')}
                className="mail-cloud-list-overview-component-container04"
              >
                <span>Campaigns</span>
              </div>
            )}
            {list === 'accounts' && (
              <div className="mail-cloud-list-overview-component-container05">
                <span>Accounts</span>
              </div>
            )}
            {list === 'campaigns' && (
              <div
                onClick={() => setList('accounts')}
                className="mail-cloud-list-overview-component-container06"
              >
                <span>Accounts</span>
              </div>
            )}
          </div>
        </div>
        {list === 'campaigns' && (
          <div className="mail-cloud-list-overview-component-container07">
            <div className="mail-cloud-list-overview-component-container08 border_bottom">
              <div className="mail-cloud-list-overview-component-container09">
                <span className="mail-cloud-list-overview-component-text05">
                  Campaign
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container10">
                <span className="mail-cloud-list-overview-component-text06">
                  Contacted
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container11">
                <span className="mail-cloud-list-overview-component-text07">
                  Opened
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container12">
                <span className="mail-cloud-list-overview-component-text08">
                  Link Clicked
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container13">
                <span className="mail-cloud-list-overview-component-text09">
                  Replied
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container14 border_bottom">
              <div className="mail-cloud-list-overview-component-container15">
                <span className="mail-cloud-list-overview-component-text10">
                  Up2Data, 0-25 MA, Founder, Germany
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container16">
                <span className="mail-cloud-list-overview-component-text11">
                  611
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container17">
                <span className="mail-cloud-list-overview-component-text12">
                  407
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container18">
                <span className="mail-cloud-list-overview-component-text13">
                  0
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container19">
                <span className="mail-cloud-list-overview-component-text14">
                  0
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container20 border_bottom">
              <div className="mail-cloud-list-overview-component-container21">
                <span className="mail-cloud-list-overview-component-text15">
                  Up2Data, 0-25 MA, Founder, Germany
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container22">
                <span className="mail-cloud-list-overview-component-text16">
                  611
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container23">
                <span className="mail-cloud-list-overview-component-text17">
                  407
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container24">
                <span className="mail-cloud-list-overview-component-text18">
                  0
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container25">
                <span className="mail-cloud-list-overview-component-text19">
                  0
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container26 border_bottom">
              <div className="mail-cloud-list-overview-component-container27">
                <span className="mail-cloud-list-overview-component-text20">
                  Up2Data, 0-25 MA, Founder, Germany
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container28">
                <span className="mail-cloud-list-overview-component-text21">
                  611
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container29">
                <span className="mail-cloud-list-overview-component-text22">
                  407
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container30">
                <span className="mail-cloud-list-overview-component-text23">
                  0
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container31">
                <span className="mail-cloud-list-overview-component-text24">
                  0
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container32 border_bottom">
              <div className="mail-cloud-list-overview-component-container33">
                <span className="mail-cloud-list-overview-component-text25">
                  Up2Data, 0-25 MA, Founder, Germany
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container34">
                <span className="mail-cloud-list-overview-component-text26">
                  611
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container35">
                <span className="mail-cloud-list-overview-component-text27">
                  407
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container36">
                <span className="mail-cloud-list-overview-component-text28">
                  0
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container37">
                <span className="mail-cloud-list-overview-component-text29">
                  0
                </span>
              </div>
            </div>
          </div>
        )}
        {list === 'accounts' && (
          <div className="mail-cloud-list-overview-component-container38">
            <div className="mail-cloud-list-overview-component-container39 border_bottom">
              <div className="mail-cloud-list-overview-component-container40">
                <span className="mail-cloud-list-overview-component-text30">
                  Sending account
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container41">
                <span className="mail-cloud-list-overview-component-text31">
                  Contacted
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container42">
                <span className="mail-cloud-list-overview-component-text32">
                  Opened
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container43">
                <span className="mail-cloud-list-overview-component-text33">
                  Replied
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container44">
                <span className="mail-cloud-list-overview-component-text34">
                  Combined score
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container45 border_bottom">
              <div className="mail-cloud-list-overview-component-container46">
                <span className="mail-cloud-list-overview-component-text35">
                  daniel.d@up2data.today
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container47">
                <span className="mail-cloud-list-overview-component-text36">
                  70
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container48">
                <span className="mail-cloud-list-overview-component-text37">
                  49
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container49">
                <span className="mail-cloud-list-overview-component-text38">
                  11
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container50">
                <span className="mail-cloud-list-overview-component-text39">
                  36.6
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container51 border_bottom">
              <div className="mail-cloud-list-overview-component-container52">
                <span className="mail-cloud-list-overview-component-text40">
                  daniel.d@up2data.today
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container53">
                <span className="mail-cloud-list-overview-component-text41">
                  70
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container54">
                <span className="mail-cloud-list-overview-component-text42">
                  49
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container55">
                <span className="mail-cloud-list-overview-component-text43">
                  11
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container56">
                <span className="mail-cloud-list-overview-component-text44">
                  36.6
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container57 border_bottom">
              <div className="mail-cloud-list-overview-component-container58">
                <span className="mail-cloud-list-overview-component-text45">
                  daniel.d@up2data.today
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container59">
                <span className="mail-cloud-list-overview-component-text46">
                  70
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container60">
                <span className="mail-cloud-list-overview-component-text47">
                  49
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container61">
                <span className="mail-cloud-list-overview-component-text48">
                  11
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container62">
                <span className="mail-cloud-list-overview-component-text49">
                  36.6
                </span>
              </div>
            </div>
            <div className="mail-cloud-list-overview-component-container63 border_bottom">
              <div className="mail-cloud-list-overview-component-container64">
                <span className="mail-cloud-list-overview-component-text50">
                  daniel.d@up2data.today
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container65">
                <span className="mail-cloud-list-overview-component-text51">
                  70
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container66">
                <span className="mail-cloud-list-overview-component-text52">
                  49
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container67">
                <span className="mail-cloud-list-overview-component-text53">
                  11
                </span>
              </div>
              <div className="mail-cloud-list-overview-component-container68">
                <span className="mail-cloud-list-overview-component-text54">
                  36.6
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MailCloudListOverviewComponent
