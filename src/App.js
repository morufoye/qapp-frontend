
import React, {useContext} from 'react';
import {AuthContextProvider} from "./components/context/auth-context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from "./layout";
import Home from "./components/home";
import ConsumerRegistration from "./components/registration/consumer-registration";
import ForgotPassword from "./components/registration/forgot-password";
import RegistrationResponse from "./components/registration/registration-response";
import PasswordResetResponse from "./components/registration/password-reset-response";
import Dashboard from "./components/dashboard";

function App() {
  return (
      <Router>

          <AuthContextProvider>
            <Routes>
               <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route  path="/" element={<Home/>}/>
                <Route  path="consumer-reg" element={<ConsumerRegistration/>}/>
                   <Route  path="dashboard" element={<Dashboard/>}/>
                 <Route  path="forgot-password" element={<ForgotPassword/>}/>
                   <Route  path="registration-success" element={<RegistrationResponse/>}/>}/>
                   <Route  path="password-reset-response" element={<PasswordResetResponse/>}/>
              </Route>
            </Routes>
          </AuthContextProvider>

      </Router>

  );
}

export default App;
