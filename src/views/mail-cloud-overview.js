import React from 'react'

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import TopTitelComponent from '../components/top-titel-component'
import MailCloudChartsComponent from '../components/mail-cloud-charts-component'
import './mail-cloud-overview.css'

const MailCloudOverview = (props) => {
  return (
    <div className="mail-cloud-overview-container">
      <Helmet>
        <title>Traffls-Dashboard</title>
        <meta property="og:title" content="Traffls-Dashboard" />
      </Helmet>
      <div className="mail-cloud-overview-container001">
        <MenuComponent></MenuComponent>
        <div className="mail-cloud-overview-container002 border_right">
          <div className="mail-cloud-overview-container003 border_bottom">
            <div className="mail-cloud-overview-container004">
              <span className="mail-cloud-overview-text">Client ID: </span>
              <span className="mail-cloud-overview-text001">132435</span>
            </div>
            <div className="mail-cloud-overview-container005">
              <span className="mail-cloud-overview-text002">Search</span>
            </div>
          </div>
          <div className="mail-cloud-overview-container006">
            <div className="mail-cloud-overview-container007">
              <TopTitelComponent></TopTitelComponent>
              <div className="mail-cloud-overview-container008">
                <div className="mail-cloud-overview-container009">
                  <div className="mail-cloud-overview-container010">
                    <span className="mail-cloud-overview-text003 Content_2">
                      <span>Total send</span>
                      <br></br>
                    </span>
                    <div className="mail-cloud-overview-container011">
                      <span className="mail-cloud-overview-text006">635</span>
                      <span className="mail-cloud-overview-text007">
                        +13.6%
                      </span>
                    </div>
                    <span className="mail-cloud-overview-text008 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="mail-cloud-overview-container012">
                    <div className="mail-cloud-overview-container013">
                      <div className="mail-cloud-overview-container014">
                        <div className="mail-cloud-overview-container015">
                          <div className="mail-cloud-overview-container016"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container017">
                        <span className="mail-cloud-overview-text009">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container018">
                      <div className="mail-cloud-overview-container019">
                        <div className="mail-cloud-overview-container020">
                          <div className="mail-cloud-overview-container021"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container022">
                        <span className="mail-cloud-overview-text010">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container023">
                      <div className="mail-cloud-overview-container024">
                        <div className="mail-cloud-overview-container025">
                          <div className="mail-cloud-overview-container026"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container027">
                        <span className="mail-cloud-overview-text011">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container028">
                      <div className="mail-cloud-overview-container029">
                        <div className="mail-cloud-overview-container030">
                          <div className="mail-cloud-overview-container031"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container032">
                        <span className="mail-cloud-overview-text012">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container033">
                      <div className="mail-cloud-overview-container034">
                        <div className="mail-cloud-overview-container035">
                          <div className="mail-cloud-overview-container036"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container037">
                        <span className="mail-cloud-overview-text013">F</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container038">
                      <div className="mail-cloud-overview-container039">
                        <div className="mail-cloud-overview-container040">
                          <div className="mail-cloud-overview-container041"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container042">
                        <span className="mail-cloud-overview-text014">S</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container043">
                      <div className="mail-cloud-overview-container044">
                        <div className="mail-cloud-overview-container045">
                          <div className="mail-cloud-overview-container046"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container047">
                        <span className="mail-cloud-overview-text015">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mail-cloud-overview-container048">
                  <div className="mail-cloud-overview-container049">
                    <span className="mail-cloud-overview-text016 Content_2">
                      <span>Open rate</span>
                      <br></br>
                    </span>
                    <div className="mail-cloud-overview-container050">
                      <span className="mail-cloud-overview-text019">635</span>
                      <span className="mail-cloud-overview-text020">33.1%</span>
                    </div>
                    <span className="mail-cloud-overview-text021 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="mail-cloud-overview-container051">
                    <div className="mail-cloud-overview-container052">
                      <div className="mail-cloud-overview-container053">
                        <div className="mail-cloud-overview-container054">
                          <div className="mail-cloud-overview-container055"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container056">
                        <span className="mail-cloud-overview-text022">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container057">
                      <div className="mail-cloud-overview-container058">
                        <div className="mail-cloud-overview-container059">
                          <div className="mail-cloud-overview-container060"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container061">
                        <span className="mail-cloud-overview-text023">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container062">
                      <div className="mail-cloud-overview-container063">
                        <div className="mail-cloud-overview-container064">
                          <div className="mail-cloud-overview-container065"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container066">
                        <span className="mail-cloud-overview-text024">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container067">
                      <div className="mail-cloud-overview-container068">
                        <div className="mail-cloud-overview-container069">
                          <div className="mail-cloud-overview-container070"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container071">
                        <span className="mail-cloud-overview-text025">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container072">
                      <div className="mail-cloud-overview-container073">
                        <div className="mail-cloud-overview-container074">
                          <div className="mail-cloud-overview-container075"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container076">
                        <span className="mail-cloud-overview-text026">F</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container077">
                      <div className="mail-cloud-overview-container078">
                        <div className="mail-cloud-overview-container079">
                          <div className="mail-cloud-overview-container080"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container081">
                        <span className="mail-cloud-overview-text027">S</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container082">
                      <div className="mail-cloud-overview-container083">
                        <div className="mail-cloud-overview-container084">
                          <div className="mail-cloud-overview-container085"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container086">
                        <span className="mail-cloud-overview-text028">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mail-cloud-overview-container087">
                  <div className="mail-cloud-overview-container088">
                    <span className="mail-cloud-overview-text029 Content_2">
                      <span>Click rate</span>
                      <br></br>
                    </span>
                    <div className="mail-cloud-overview-container089">
                      <span className="mail-cloud-overview-text032">635</span>
                      <span className="mail-cloud-overview-text033">+7.8%</span>
                    </div>
                    <span className="mail-cloud-overview-text034 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="mail-cloud-overview-container090">
                    <div className="mail-cloud-overview-container091">
                      <div className="mail-cloud-overview-container092">
                        <div className="mail-cloud-overview-container093">
                          <div className="mail-cloud-overview-container094"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container095">
                        <span className="mail-cloud-overview-text035">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container096">
                      <div className="mail-cloud-overview-container097">
                        <div className="mail-cloud-overview-container098">
                          <div className="mail-cloud-overview-container099"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container100">
                        <span className="mail-cloud-overview-text036">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container101">
                      <div className="mail-cloud-overview-container102">
                        <div className="mail-cloud-overview-container103">
                          <div className="mail-cloud-overview-container104"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container105">
                        <span className="mail-cloud-overview-text037">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container106">
                      <div className="mail-cloud-overview-container107">
                        <div className="mail-cloud-overview-container108">
                          <div className="mail-cloud-overview-container109"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container110">
                        <span className="mail-cloud-overview-text038">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container111">
                      <div className="mail-cloud-overview-container112">
                        <div className="mail-cloud-overview-container113">
                          <div className="mail-cloud-overview-container114"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container115">
                        <span className="mail-cloud-overview-text039">F</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container116">
                      <div className="mail-cloud-overview-container117">
                        <div className="mail-cloud-overview-container118">
                          <div className="mail-cloud-overview-container119"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container120">
                        <span className="mail-cloud-overview-text040">S</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container121">
                      <div className="mail-cloud-overview-container122">
                        <div className="mail-cloud-overview-container123">
                          <div className="mail-cloud-overview-container124"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container125">
                        <span className="mail-cloud-overview-text041">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mail-cloud-overview-container126">
                  <div className="mail-cloud-overview-container127">
                    <span className="mail-cloud-overview-text042 Content_2">
                      <span>Reply rate</span>
                      <br></br>
                    </span>
                    <div className="mail-cloud-overview-container128">
                      <span className="mail-cloud-overview-text045">635</span>
                      <span className="mail-cloud-overview-text046">+1.8%</span>
                    </div>
                    <span className="mail-cloud-overview-text047 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="mail-cloud-overview-container129">
                    <div className="mail-cloud-overview-container130">
                      <div className="mail-cloud-overview-container131">
                        <div className="mail-cloud-overview-container132">
                          <div className="mail-cloud-overview-container133"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container134">
                        <span className="mail-cloud-overview-text048">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container135">
                      <div className="mail-cloud-overview-container136">
                        <div className="mail-cloud-overview-container137">
                          <div className="mail-cloud-overview-container138"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container139">
                        <span className="mail-cloud-overview-text049">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container140">
                      <div className="mail-cloud-overview-container141">
                        <div className="mail-cloud-overview-container142">
                          <div className="mail-cloud-overview-container143"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container144">
                        <span className="mail-cloud-overview-text050">M</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container145">
                      <div className="mail-cloud-overview-container146">
                        <div className="mail-cloud-overview-container147">
                          <div className="mail-cloud-overview-container148"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container149">
                        <span className="mail-cloud-overview-text051">D</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container150">
                      <div className="mail-cloud-overview-container151">
                        <div className="mail-cloud-overview-container152">
                          <div className="mail-cloud-overview-container153"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container154">
                        <span className="mail-cloud-overview-text052">F</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container155">
                      <div className="mail-cloud-overview-container156">
                        <div className="mail-cloud-overview-container157">
                          <div className="mail-cloud-overview-container158"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container159">
                        <span className="mail-cloud-overview-text053">S</span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container160">
                      <div className="mail-cloud-overview-container161">
                        <div className="mail-cloud-overview-container162">
                          <div className="mail-cloud-overview-container163"></div>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container164">
                        <span className="mail-cloud-overview-text054">S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mail-cloud-overview-container165">
                <MailCloudChartsComponent></MailCloudChartsComponent>
                <div className="mail-cloud-overview-container166">
                  <div className="mail-cloud-overview-container167 border_bottom">
                    <span className="mail-cloud-overview-text055">
                      Performance
                    </span>
                  </div>
                  <div className="mail-cloud-overview-container168">
                    <div className="mail-cloud-overview-container169 border_bottom">
                      <span className="mail-cloud-overview-text056">
                        Campaigns
                      </span>
                      <span className="mail-cloud-overview-text057">661</span>
                    </div>
                    <div className="mail-cloud-overview-container170 border_bottom">
                      <span className="mail-cloud-overview-text058">
                        Accounts
                      </span>
                      <span className="mail-cloud-overview-text059">661</span>
                    </div>
                    <div className="mail-cloud-overview-container171 border_bottom">
                      <span className="mail-cloud-overview-text060">
                        Contacted
                      </span>
                      <span className="mail-cloud-overview-text061">661</span>
                    </div>
                    <div className="mail-cloud-overview-container172 border_bottom">
                      <span className="mail-cloud-overview-text062">
                        Opened
                      </span>
                      <div className="mail-cloud-overview-container173">
                        <span className="mail-cloud-overview-text063">344</span>
                        <div className="mail-cloud-overview-container174"></div>
                        <span className="mail-cloud-overview-text064">
                          11.8%
                        </span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container175 border_bottom">
                      <span className="mail-cloud-overview-text065">
                        Link clicked
                      </span>
                      <span className="mail-cloud-overview-text066">661</span>
                    </div>
                    <div className="mail-cloud-overview-container176">
                      <span className="mail-cloud-overview-text067">
                        Replied
                      </span>
                      <div className="mail-cloud-overview-container177">
                        <span className="mail-cloud-overview-text068">344</span>
                        <div className="mail-cloud-overview-container178"></div>
                        <span className="mail-cloud-overview-text069">
                          11.8%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mail-cloud-overview-container179">
                <div className="mail-cloud-overview-container180">
                  <div className="mail-cloud-overview-container181 border_bottom">
                    <span className="mail-cloud-overview-text070">
                      Campaigns
                    </span>
                    <div className="mail-cloud-overview-container182">
                      <svg viewBox="0 0 1024 1024" className="icon_15">
                        <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mail-cloud-overview-container183">
                    <div className="mail-cloud-overview-container184 border_bottom">
                      <div className="mail-cloud-overview-container185">
                        <span className="mail-cloud-overview-text071">
                          Name
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container186">
                        <span className="mail-cloud-overview-text072">
                          Status
                        </span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container187 border_bottom">
                      <div className="mail-cloud-overview-container188">
                        <span className="mail-cloud-overview-text073">
                          Up2Data, 0-25 MA, Founder, Germany
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container189">
                        <div className="mail-cloud-overview-container190">
                          <span className="mail-cloud-overview-text074">
                            Running
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mail-cloud-overview-container191">
                  <div className="mail-cloud-overview-container192 border_bottom">
                    <span className="mail-cloud-overview-text075">Steps</span>
                  </div>
                  <div className="mail-cloud-overview-container193">
                    <div className="mail-cloud-overview-container194 border_bottom">
                      <div className="mail-cloud-overview-container195 border_right">
                        <span className="mail-cloud-overview-text076">
                          Step
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container196 border_right">
                        <span className="mail-cloud-overview-text077">
                          Send
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container197 border_right">
                        <span className="mail-cloud-overview-text078">
                          Opened
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container198 border_right">
                        <span className="mail-cloud-overview-text079">
                          Link Clicked
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container199 border_right">
                        <span className="mail-cloud-overview-text080">
                          Replied
                        </span>
                      </div>
                      <div className="mail-cloud-overview-container200">
                        <span className="mail-cloud-overview-text081">
                          Opportunities
                        </span>
                      </div>
                    </div>
                    <div className="mail-cloud-overview-container201">
                      <div className="mail-cloud-overview-container202 border_bottom">
                        <div className="mail-cloud-overview-container203 border_right">
                          <span className="mail-cloud-overview-text082">
                            Total
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container204 border_right">
                          <span className="mail-cloud-overview-text083 opacity_06">
                            611
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container205 border_right">
                          <span className="mail-cloud-overview-text084 opacity_06">
                            407
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container206 border_right">
                          <span className="mail-cloud-overview-text085 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container207 border_right">
                          <span className="mail-cloud-overview-text086 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container208">
                          <span className="mail-cloud-overview-text087 opacity_06">
                            0
                          </span>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container209 border_bottom">
                        <div className="mail-cloud-overview-container210 border_right">
                          <span className="mail-cloud-overview-text088">1</span>
                        </div>
                        <div className="mail-cloud-overview-container211 border_right">
                          <span className="mail-cloud-overview-text089 opacity_06">
                            611
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container212 border_right">
                          <span className="mail-cloud-overview-text090 opacity_06">
                            407
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container213 border_right">
                          <span className="mail-cloud-overview-text091 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container214 border_right">
                          <span className="mail-cloud-overview-text092 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container215">
                          <span className="mail-cloud-overview-text093 opacity_06">
                            0
                          </span>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container216 border_bottom">
                        <div className="mail-cloud-overview-container217 border_right">
                          <span className="mail-cloud-overview-text094">2</span>
                        </div>
                        <div className="mail-cloud-overview-container218 border_right">
                          <span className="mail-cloud-overview-text095 opacity_06">
                            611
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container219 border_right">
                          <span className="mail-cloud-overview-text096 opacity_06">
                            407
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container220 border_right">
                          <span className="mail-cloud-overview-text097 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container221 border_right">
                          <span className="mail-cloud-overview-text098 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container222">
                          <span className="mail-cloud-overview-text099 opacity_06">
                            0
                          </span>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container223 border_bottom">
                        <div className="mail-cloud-overview-container224 border_right">
                          <span className="mail-cloud-overview-text100">3</span>
                        </div>
                        <div className="mail-cloud-overview-container225 border_right">
                          <span className="mail-cloud-overview-text101 opacity_06">
                            611
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container226 border_right">
                          <span className="mail-cloud-overview-text102 opacity_06">
                            407
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container227 border_right">
                          <span className="mail-cloud-overview-text103 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container228 border_right">
                          <span className="mail-cloud-overview-text104 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container229">
                          <span className="mail-cloud-overview-text105 opacity_06">
                            0
                          </span>
                        </div>
                      </div>
                      <div className="mail-cloud-overview-container230 border_bottom">
                        <div className="mail-cloud-overview-container231 border_right">
                          <span className="mail-cloud-overview-text106">3</span>
                        </div>
                        <div className="mail-cloud-overview-container232 border_right">
                          <span className="mail-cloud-overview-text107 opacity_06">
                            611
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container233 border_right">
                          <span className="mail-cloud-overview-text108 opacity_06">
                            407
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container234 border_right">
                          <span className="mail-cloud-overview-text109 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container235 border_right">
                          <span className="mail-cloud-overview-text110 opacity_06">
                            0
                          </span>
                        </div>
                        <div className="mail-cloud-overview-container236">
                          <span className="mail-cloud-overview-text111 opacity_06">
                            0
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
    </div>
  )
}

export default MailCloudOverview
