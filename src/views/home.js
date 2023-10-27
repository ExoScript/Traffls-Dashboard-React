import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import MailCloudListOverviewComponent from '../components/mail-cloud-list-overview-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traffls-Dashboard</title>
        <meta property="og:title" content="Traffls-Dashboard" />
      </Helmet>
      <div className="home-container001">
        <MenuComponent></MenuComponent>
        <div className="home-container002 border_right">
          <div className="home-container003 border_bottom">
            <div className="home-container004">
              <span className="home-text">Client ID: </span>
              <span className="home-text01">132435</span>
            </div>
            <div className="home-container005">
              <span className="home-text02">Search</span>
            </div>
          </div>
          <div className="home-container006">
            <div className="home-container007">
              <div className="home-container008">
                <div className="home-container009">
                  <span className="home-text03">Mail cloud</span>
                  <span className="home-text04">-</span>
                  <Link to="/page" className="home-navlink">
                    Overview
                  </Link>
                </div>
                <div className="home-container010">
                  <div className="home-container011">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                    </svg>
                  </div>
                  <div className="home-container012">
                    <span>New campaign</span>
                  </div>
                </div>
              </div>
              <div className="home-container013">
                <div className="home-container014">
                  <div className="home-container015">
                    <span className="home-text06 Content_2">
                      <span>Total send</span>
                      <br></br>
                    </span>
                    <div className="home-container016">
                      <span className="home-text09">635</span>
                      <span className="home-text10">+13.6%</span>
                    </div>
                    <span className="home-text11 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container017">
                    <div className="home-container018">
                      <div className="home-container019">
                        <div className="home-container020">
                          <div className="home-container021"></div>
                        </div>
                      </div>
                      <div className="home-container022">
                        <span className="home-text12">M</span>
                      </div>
                    </div>
                    <div className="home-container023">
                      <div className="home-container024">
                        <div className="home-container025">
                          <div className="home-container026"></div>
                        </div>
                      </div>
                      <div className="home-container027">
                        <span className="home-text13">D</span>
                      </div>
                    </div>
                    <div className="home-container028">
                      <div className="home-container029">
                        <div className="home-container030">
                          <div className="home-container031"></div>
                        </div>
                      </div>
                      <div className="home-container032">
                        <span className="home-text14">M</span>
                      </div>
                    </div>
                    <div className="home-container033">
                      <div className="home-container034">
                        <div className="home-container035">
                          <div className="home-container036"></div>
                        </div>
                      </div>
                      <div className="home-container037">
                        <span className="home-text15">D</span>
                      </div>
                    </div>
                    <div className="home-container038">
                      <div className="home-container039">
                        <div className="home-container040">
                          <div className="home-container041"></div>
                        </div>
                      </div>
                      <div className="home-container042">
                        <span className="home-text16">F</span>
                      </div>
                    </div>
                    <div className="home-container043">
                      <div className="home-container044">
                        <div className="home-container045">
                          <div className="home-container046"></div>
                        </div>
                      </div>
                      <div className="home-container047">
                        <span className="home-text17">S</span>
                      </div>
                    </div>
                    <div className="home-container048">
                      <div className="home-container049">
                        <div className="home-container050">
                          <div className="home-container051"></div>
                        </div>
                      </div>
                      <div className="home-container052">
                        <span className="home-text18">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container053">
                  <div className="home-container054">
                    <span className="home-text19 Content_2">
                      <span>Open rate</span>
                      <br></br>
                    </span>
                    <div className="home-container055">
                      <span className="home-text22">635</span>
                      <span className="home-text23">33.1%</span>
                    </div>
                    <span className="home-text24 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container056">
                    <div className="home-container057">
                      <div className="home-container058">
                        <div className="home-container059">
                          <div className="home-container060"></div>
                        </div>
                      </div>
                      <div className="home-container061">
                        <span className="home-text25">M</span>
                      </div>
                    </div>
                    <div className="home-container062">
                      <div className="home-container063">
                        <div className="home-container064">
                          <div className="home-container065"></div>
                        </div>
                      </div>
                      <div className="home-container066">
                        <span className="home-text26">D</span>
                      </div>
                    </div>
                    <div className="home-container067">
                      <div className="home-container068">
                        <div className="home-container069">
                          <div className="home-container070"></div>
                        </div>
                      </div>
                      <div className="home-container071">
                        <span className="home-text27">M</span>
                      </div>
                    </div>
                    <div className="home-container072">
                      <div className="home-container073">
                        <div className="home-container074">
                          <div className="home-container075"></div>
                        </div>
                      </div>
                      <div className="home-container076">
                        <span className="home-text28">D</span>
                      </div>
                    </div>
                    <div className="home-container077">
                      <div className="home-container078">
                        <div className="home-container079">
                          <div className="home-container080"></div>
                        </div>
                      </div>
                      <div className="home-container081">
                        <span className="home-text29">F</span>
                      </div>
                    </div>
                    <div className="home-container082">
                      <div className="home-container083">
                        <div className="home-container084">
                          <div className="home-container085"></div>
                        </div>
                      </div>
                      <div className="home-container086">
                        <span className="home-text30">S</span>
                      </div>
                    </div>
                    <div className="home-container087">
                      <div className="home-container088">
                        <div className="home-container089">
                          <div className="home-container090"></div>
                        </div>
                      </div>
                      <div className="home-container091">
                        <span className="home-text31">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container092">
                  <div className="home-container093">
                    <span className="home-text32 Content_2">
                      <span>Click rate</span>
                      <br></br>
                    </span>
                    <div className="home-container094">
                      <span className="home-text35">635</span>
                      <span className="home-text36">+7.8%</span>
                    </div>
                    <span className="home-text37 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container095">
                    <div className="home-container096">
                      <div className="home-container097">
                        <div className="home-container098">
                          <div className="home-container099"></div>
                        </div>
                      </div>
                      <div className="home-container100">
                        <span className="home-text38">M</span>
                      </div>
                    </div>
                    <div className="home-container101">
                      <div className="home-container102">
                        <div className="home-container103">
                          <div className="home-container104"></div>
                        </div>
                      </div>
                      <div className="home-container105">
                        <span className="home-text39">D</span>
                      </div>
                    </div>
                    <div className="home-container106">
                      <div className="home-container107">
                        <div className="home-container108">
                          <div className="home-container109"></div>
                        </div>
                      </div>
                      <div className="home-container110">
                        <span className="home-text40">M</span>
                      </div>
                    </div>
                    <div className="home-container111">
                      <div className="home-container112">
                        <div className="home-container113">
                          <div className="home-container114"></div>
                        </div>
                      </div>
                      <div className="home-container115">
                        <span className="home-text41">D</span>
                      </div>
                    </div>
                    <div className="home-container116">
                      <div className="home-container117">
                        <div className="home-container118">
                          <div className="home-container119"></div>
                        </div>
                      </div>
                      <div className="home-container120">
                        <span className="home-text42">F</span>
                      </div>
                    </div>
                    <div className="home-container121">
                      <div className="home-container122">
                        <div className="home-container123">
                          <div className="home-container124"></div>
                        </div>
                      </div>
                      <div className="home-container125">
                        <span className="home-text43">S</span>
                      </div>
                    </div>
                    <div className="home-container126">
                      <div className="home-container127">
                        <div className="home-container128">
                          <div className="home-container129"></div>
                        </div>
                      </div>
                      <div className="home-container130">
                        <span className="home-text44">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container131">
                  <div className="home-container132">
                    <span className="home-text45 Content_2">
                      <span>Reply rate</span>
                      <br></br>
                    </span>
                    <div className="home-container133">
                      <span className="home-text48">635</span>
                      <span className="home-text49">+1.8%</span>
                    </div>
                    <span className="home-text50 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container134">
                    <div className="home-container135">
                      <div className="home-container136">
                        <div className="home-container137">
                          <div className="home-container138"></div>
                        </div>
                      </div>
                      <div className="home-container139">
                        <span className="home-text51">M</span>
                      </div>
                    </div>
                    <div className="home-container140">
                      <div className="home-container141">
                        <div className="home-container142">
                          <div className="home-container143"></div>
                        </div>
                      </div>
                      <div className="home-container144">
                        <span className="home-text52">D</span>
                      </div>
                    </div>
                    <div className="home-container145">
                      <div className="home-container146">
                        <div className="home-container147">
                          <div className="home-container148"></div>
                        </div>
                      </div>
                      <div className="home-container149">
                        <span className="home-text53">M</span>
                      </div>
                    </div>
                    <div className="home-container150">
                      <div className="home-container151">
                        <div className="home-container152">
                          <div className="home-container153"></div>
                        </div>
                      </div>
                      <div className="home-container154">
                        <span className="home-text54">D</span>
                      </div>
                    </div>
                    <div className="home-container155">
                      <div className="home-container156">
                        <div className="home-container157">
                          <div className="home-container158"></div>
                        </div>
                      </div>
                      <div className="home-container159">
                        <span className="home-text55">F</span>
                      </div>
                    </div>
                    <div className="home-container160">
                      <div className="home-container161">
                        <div className="home-container162">
                          <div className="home-container163"></div>
                        </div>
                      </div>
                      <div className="home-container164">
                        <span className="home-text56">S</span>
                      </div>
                    </div>
                    <div className="home-container165">
                      <div className="home-container166">
                        <div className="home-container167">
                          <div className="home-container168"></div>
                        </div>
                      </div>
                      <div className="home-container169">
                        <span className="home-text57">S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-container170">
                <div className="home-container171">
                  <div className="home-container172 border_bottom">
                    <span className="home-text58">Charts</span>
                    <div className="home-container173">
                      <div className="home-container174">
                        <svg viewBox="0 0 1024 1024" className="home-icon2">
                          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                        </svg>
                      </div>
                      <div className="home-container175">
                        <span className="home-text59">Jun</span>
                        <span className="home-text60">-</span>
                        <span className="home-text61">Feb</span>
                      </div>
                      <div className="home-container176">
                        <svg viewBox="0 0 1024 1024" className="home-icon4">
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="home-container177"></div>
                </div>
                <div className="home-container178">
                  <div className="home-container179 border_bottom">
                    <span className="home-text62">Performance</span>
                  </div>
                  <div className="home-container180">
                    <div className="home-container181 border_bottom">
                      <span className="home-text63">Campaigns</span>
                      <span className="home-text64">661</span>
                    </div>
                    <div className="home-container182 border_bottom">
                      <span className="home-text65">Accounts</span>
                      <span className="home-text66">661</span>
                    </div>
                    <div className="home-container183 border_bottom">
                      <span className="home-text67">Contacted</span>
                      <span className="home-text68">661</span>
                    </div>
                    <div className="home-container184 border_bottom">
                      <span className="home-text69">Opened</span>
                      <div className="home-container185">
                        <span className="home-text70">344</span>
                        <div className="home-container186"></div>
                        <span className="home-text71">11.8%</span>
                      </div>
                    </div>
                    <div className="home-container187 border_bottom">
                      <span className="home-text72">Link clicked</span>
                      <span className="home-text73">661</span>
                    </div>
                    <div className="home-container188">
                      <span className="home-text74">Replied</span>
                      <div className="home-container189">
                        <span className="home-text75">344</span>
                        <div className="home-container190"></div>
                        <span className="home-text76">11.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <MailCloudListOverviewComponent></MailCloudListOverviewComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
