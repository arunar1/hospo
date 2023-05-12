import React from 'react';
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';

import PatientHeader from './PatientHeader'
import TakeAppointment from '../TakeAppointment/TakeAppointment';

export default function PatientMenu() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route exact path='/about'>
          <PatientHeader/>
          </Route>
          <Route path='/takeappointment'>
            <TakeAppointment/>
          </Route>
          <Route path='/appointmenthistory'>
          </Route>
          <Route path='/rescheduleappointment'>
          </Route>
          <Route path='/cancelappointment'>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
