import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//lazy load pages
const HomePage = lazy(() => import('.pages/HomePage')) 
const ScantronPage = lazy(() => import('.pages/ScantronPage')) 
const AnalyticsPage = lazy(() => import('.pages/AnalyticsPage')) 

//uppermost components are pages that represent the entire page of a specific routex
const App = () => {
  return (
    <Router>
      <Switch>
        <React.StrictMode>
          <Suspense fallback={ <div>Loading...</div> }>
            <Route exact path="/" component={ HomePage }/>
            <Route path="/scantron" component={ ScantronPage }/>
            <Route path="/analytics" component={ AnalyticsPage }/>
          </Suspense>
        </React.StrictMode>
      </Switch>
    </Router>
  );
}

export default App;
