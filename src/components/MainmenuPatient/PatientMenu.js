import React from 'react';
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';

import PatientHeader from './PatientHeader'
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import Rescheduleappointment from '../Reschedule/Rescheduleappointment';
import AppointmentHistory from '../History/AppointmentHistory';
import CancelAppointment from '../Cancel/CancelAppointment';
import Slot from '../TakeAppointment/Slot';
export default function patientMenu() {
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
            <AppointmentHistory/>
          </Route>
          <Route path='/rescheduleappointment'>
            <Rescheduleappointment/>
          </Route>
          <Route path='/cancelappointment'>
            <CancelAppointment/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

