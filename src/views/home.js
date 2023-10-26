import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traffls-Dashboard</title>
        <meta property="og:title" content="Traffls-Dashboard" />
      </Helmet>
      <div className="home-container001">
        <div className="home-container002">
          <div className="home-container003 border_bottom">
            <div className="home-container004">
              <div className="home-container005"></div>
              <span className="home-text">Traffls - Dashboard</span>
            </div>
            <div className="home-container006">
              <svg viewBox="0 0 1024 1024" className="home-icon opacity_06">
                <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home-text01 opacity_06">Search</span>
            </div>
          </div>
          <div className="home-container007">
            <div className="home-container008">
              <div className="home-container009">
                <svg viewBox="0 0 1024 1024" className="icon_18">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <span>Mail-Cloud</span>
              </div>
              <div className="home-container010">
                <svg viewBox="0 0 1024 1024" className="icon_15 opacity_06">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="home-container011">
              <div className="home-container012">
                <div className="home-container013"></div>
              </div>
              <div className="home-container014">
                <div className="home-container015">
                  <span>Overview</span>
                </div>
                <div className="home-container016">
                  <span>Accounts</span>
                </div>
                <div className="home-container017">
                  <span>Campaigns</span>
                </div>
                <div className="home-container018">
                  <span>Leads</span>
                </div>
                <div className="home-container019">
                  <span>Inbox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container020">
          <div className="home-container021 border_bottom">
            <div className="home-container022">
              <div className="home-container023"></div>
              <span>Traffls - Dashboard</span>
            </div>
            <div className="home-container024">
              <svg viewBox="0 0 1024 1024" className="home-icon06 opacity_06">
                <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home-text09 opacity_06">Search</span>
            </div>
          </div>
          <div className="home-container025">
            <div className="home-container026">
              <div className="home-container027">
                <svg viewBox="0 0 1024 1024" className="icon_18">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <span>Mail-Cloud</span>
              </div>
              <div className="home-container028">
                <svg viewBox="0 0 1024 1024" className="icon_15 opacity_06">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="home-container029">
              <div className="home-container030">
                <div className="home-container031"></div>
              </div>
              <div className="home-container032">
                <div className="home-container033">
                  <span>Overview</span>
                </div>
                <div className="home-container034">
                  <span>Accounts</span>
                </div>
                <div className="home-container035">
                  <span>Campaigns</span>
                </div>
                <div className="home-container036">
                  <span>Leads</span>
                </div>
                <div className="home-container037">
                  <span>Inbox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container038 border_right">
          <div className="home-container039 border_bottom">
            <div className="home-container040">
              <span className="home-text16">Client ID: </span>
              <span className="home-text17">132435</span>
            </div>
            <div className="home-container041">
              <span className="home-text18">Search</span>
            </div>
          </div>
          <div className="home-container042">
            <div className="home-container043">
              <div className="home-container044">
                <div className="home-container045">
                  <span className="home-text19">Mail cloud</span>
                  <span className="home-text20">-</span>
                  <Link to="/page" className="home-navlink">
                    Overview
                  </Link>
                </div>
                <div className="home-container046">
                  <div className="home-container047">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                    </svg>
                  </div>
                  <div className="home-container048">
                    <span>New campaign</span>
                  </div>
                </div>
              </div>
              <div className="home-container049">
                <div className="home-container050">
                  <div className="home-container051">
                    <span className="home-text22 Content_2">
                      <span>Reply rate</span>
                      <br></br>
                    </span>
                    <div className="home-container052">
                      <span className="home-text25">635</span>
                      <span className="home-text26">+13.6%</span>
                    </div>
                    <span className="home-text27 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container053">
                    <div className="home-container054">
                      <div className="home-container055">
                        <div className="home-container056">
                          <div className="home-container057"></div>
                        </div>
                      </div>
                      <div className="home-container058">
                        <span className="home-text28">M</span>
                      </div>
                    </div>
                    <div className="home-container059">
                      <div className="home-container060">
                        <div className="home-container061">
                          <div className="home-container062"></div>
                        </div>
                      </div>
                      <div className="home-container063">
                        <span className="home-text29">D</span>
                      </div>
                    </div>
                    <div className="home-container064">
                      <div className="home-container065">
                        <div className="home-container066">
                          <div className="home-container067"></div>
                        </div>
                      </div>
                      <div className="home-container068">
                        <span className="home-text30">M</span>
                      </div>
                    </div>
                    <div className="home-container069">
                      <div className="home-container070">
                        <div className="home-container071">
                          <div className="home-container072"></div>
                        </div>
                      </div>
                      <div className="home-container073">
                        <span className="home-text31">D</span>
                      </div>
                    </div>
                    <div className="home-container074">
                      <div className="home-container075">
                        <div className="home-container076">
                          <div className="home-container077"></div>
                        </div>
                      </div>
                      <div className="home-container078">
                        <span className="home-text32">F</span>
                      </div>
                    </div>
                    <div className="home-container079">
                      <div className="home-container080">
                        <div className="home-container081">
                          <div className="home-container082"></div>
                        </div>
                      </div>
                      <div className="home-container083">
                        <span className="home-text33">S</span>
                      </div>
                    </div>
                    <div className="home-container084">
                      <div className="home-container085">
                        <div className="home-container086">
                          <div className="home-container087"></div>
                        </div>
                      </div>
                      <div className="home-container088">
                        <span className="home-text34">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container089">
                  <div className="home-container090">
                    <span className="home-text35 Content_2">
                      <span>Reply rate</span>
                      <br></br>
                    </span>
                    <div className="home-container091">
                      <span className="home-text38">635</span>
                      <span className="home-text39">+13.6%</span>
                    </div>
                    <span className="home-text40 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container092">
                    <div className="home-container093">
                      <div className="home-container094">
                        <div className="home-container095">
                          <div className="home-container096"></div>
                        </div>
                      </div>
                      <div className="home-container097">
                        <span className="home-text41">M</span>
                      </div>
                    </div>
                    <div className="home-container098">
                      <div className="home-container099">
                        <div className="home-container100">
                          <div className="home-container101"></div>
                        </div>
                      </div>
                      <div className="home-container102">
                        <span className="home-text42">D</span>
                      </div>
                    </div>
                    <div className="home-container103">
                      <div className="home-container104">
                        <div className="home-container105">
                          <div className="home-container106"></div>
                        </div>
                      </div>
                      <div className="home-container107">
                        <span className="home-text43">M</span>
                      </div>
                    </div>
                    <div className="home-container108">
                      <div className="home-container109">
                        <div className="home-container110">
                          <div className="home-container111"></div>
                        </div>
                      </div>
                      <div className="home-container112">
                        <span className="home-text44">D</span>
                      </div>
                    </div>
                    <div className="home-container113">
                      <div className="home-container114">
                        <div className="home-container115">
                          <div className="home-container116"></div>
                        </div>
                      </div>
                      <div className="home-container117">
                        <span className="home-text45">F</span>
                      </div>
                    </div>
                    <div className="home-container118">
                      <div className="home-container119">
                        <div className="home-container120">
                          <div className="home-container121"></div>
                        </div>
                      </div>
                      <div className="home-container122">
                        <span className="home-text46">S</span>
                      </div>
                    </div>
                    <div className="home-container123">
                      <div className="home-container124">
                        <div className="home-container125">
                          <div className="home-container126"></div>
                        </div>
                      </div>
                      <div className="home-container127">
                        <span className="home-text47">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container128">
                  <div className="home-container129">
                    <span className="home-text48 Content_2">
                      <span>Reply rate</span>
                      <br></br>
                    </span>
                    <div className="home-container130">
                      <span className="home-text51">635</span>
                      <span className="home-text52">+13.6%</span>
                    </div>
                    <span className="home-text53 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container131">
                    <div className="home-container132">
                      <div className="home-container133">
                        <div className="home-container134">
                          <div className="home-container135"></div>
                        </div>
                      </div>
                      <div className="home-container136">
                        <span className="home-text54">M</span>
                      </div>
                    </div>
                    <div className="home-container137">
                      <div className="home-container138">
                        <div className="home-container139">
                          <div className="home-container140"></div>
                        </div>
                      </div>
                      <div className="home-container141">
                        <span className="home-text55">D</span>
                      </div>
                    </div>
                    <div className="home-container142">
                      <div className="home-container143">
                        <div className="home-container144">
                          <div className="home-container145"></div>
                        </div>
                      </div>
                      <div className="home-container146">
                        <span className="home-text56">M</span>
                      </div>
                    </div>
                    <div className="home-container147">
                      <div className="home-container148">
                        <div className="home-container149">
                          <div className="home-container150"></div>
                        </div>
                      </div>
                      <div className="home-container151">
                        <span className="home-text57">D</span>
                      </div>
                    </div>
                    <div className="home-container152">
                      <div className="home-container153">
                        <div className="home-container154">
                          <div className="home-container155"></div>
                        </div>
                      </div>
                      <div className="home-container156">
                        <span className="home-text58">F</span>
                      </div>
                    </div>
                    <div className="home-container157">
                      <div className="home-container158">
                        <div className="home-container159">
                          <div className="home-container160"></div>
                        </div>
                      </div>
                      <div className="home-container161">
                        <span className="home-text59">S</span>
                      </div>
                    </div>
                    <div className="home-container162">
                      <div className="home-container163">
                        <div className="home-container164">
                          <div className="home-container165"></div>
                        </div>
                      </div>
                      <div className="home-container166">
                        <span className="home-text60">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container167">
                  <div className="home-container168">
                    <span className="home-text61 Content_2">
                      <span>Reply rate</span>
                      <br></br>
                    </span>
                    <div className="home-container169">
                      <span className="home-text64">635</span>
                      <span className="home-text65">+13.6%</span>
                    </div>
                    <span className="home-text66 opacity_06">
                      +57 send today
                    </span>
                  </div>
                  <div className="home-container170">
                    <div className="home-container171">
                      <div className="home-container172">
                        <div className="home-container173">
                          <div className="home-container174"></div>
                        </div>
                      </div>
                      <div className="home-container175">
                        <span className="home-text67">M</span>
                      </div>
                    </div>
                    <div className="home-container176">
                      <div className="home-container177">
                        <div className="home-container178">
                          <div className="home-container179"></div>
                        </div>
                      </div>
                      <div className="home-container180">
                        <span className="home-text68">D</span>
                      </div>
                    </div>
                    <div className="home-container181">
                      <div className="home-container182">
                        <div className="home-container183">
                          <div className="home-container184"></div>
                        </div>
                      </div>
                      <div className="home-container185">
                        <span className="home-text69">M</span>
                      </div>
                    </div>
                    <div className="home-container186">
                      <div className="home-container187">
                        <div className="home-container188">
                          <div className="home-container189"></div>
                        </div>
                      </div>
                      <div className="home-container190">
                        <span className="home-text70">D</span>
                      </div>
                    </div>
                    <div className="home-container191">
                      <div className="home-container192">
                        <div className="home-container193">
                          <div className="home-container194"></div>
                        </div>
                      </div>
                      <div className="home-container195">
                        <span className="home-text71">F</span>
                      </div>
                    </div>
                    <div className="home-container196">
                      <div className="home-container197">
                        <div className="home-container198">
                          <div className="home-container199"></div>
                        </div>
                      </div>
                      <div className="home-container200">
                        <span className="home-text72">S</span>
                      </div>
                    </div>
                    <div className="home-container201">
                      <div className="home-container202">
                        <div className="home-container203">
                          <div className="home-container204"></div>
                        </div>
                      </div>
                      <div className="home-container205">
                        <span className="home-text73">S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-container206">
                <div className="home-container207">
                  <div className="home-container208 border_bottom">
                    <span className="home-text74">Charts</span>
                    <div className="home-container209">
                      <div className="home-container210">
                        <svg viewBox="0 0 1024 1024" className="home-icon14">
                          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                        </svg>
                      </div>
                      <div className="home-container211">
                        <span className="home-text75">Jun</span>
                        <span className="home-text76">-</span>
                        <span className="home-text77">Feb</span>
                      </div>
                      <div className="home-container212">
                        <svg viewBox="0 0 1024 1024" className="home-icon16">
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container213">
                  <div className="home-container214 border_bottom">
                    <span className="home-text78">Performance</span>
                  </div>
                  <div className="home-container215">
                    <div className="home-container216 border_bottom">
                      <span className="home-text79">Campaigns</span>
                      <span className="home-text80">661</span>
                    </div>
                    <div className="home-container217 border_bottom">
                      <span className="home-text81">Accounts</span>
                      <span className="home-text82">661</span>
                    </div>
                    <div className="home-container218 border_bottom">
                      <span className="home-text83">Contacted</span>
                      <span className="home-text84">661</span>
                    </div>
                    <div className="home-container219 border_bottom">
                      <span className="home-text85">Opened</span>
                      <div className="home-container220">
                        <span className="home-text86">344</span>
                        <div className="home-container221"></div>
                        <span className="home-text87">11.8%</span>
                      </div>
                    </div>
                    <div className="home-container222 border_bottom">
                      <span className="home-text88">Link clicked</span>
                      <span className="home-text89">661</span>
                    </div>
                    <div className="home-container223">
                      <span className="home-text90">Replied</span>
                      <div className="home-container224">
                        <span className="home-text91">344</span>
                        <div className="home-container225"></div>
                        <span className="home-text92">11.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-container226">
                <div className="home-container227">
                  <div className="home-container228 border_bottom">
                    <span className="home-text93">List overview</span>
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

export default Home
