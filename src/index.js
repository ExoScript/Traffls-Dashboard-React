import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MailCloudAccounts from './views/mail-cloud-accounts'
import MailCloudInbox from './views/mail-cloud-inbox'
import Page from './views/page'
import MailCloudOverview from './views/mail-cloud-overview'
import MailCloudLeads from './views/mail-cloud-leads'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={MailCloudAccounts}
          exact
          path="/mail-cloud-accounts"
        />
        <Route component={MailCloudInbox} exact path="/mail-cloud-inbox" />
        <Route component={Page} exact path="/page" />
        <Route component={MailCloudOverview} exact path="/" />
        <Route component={MailCloudLeads} exact path="/mail-cloud-leads" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
