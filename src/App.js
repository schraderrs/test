import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import LoginPage from './components/dashboard/loginpage';
import {Home, Explanation, Information, LoadingPage, QuestionPage, ConclusionPage, Chat, Email, DashboardQuestionPage} from "./components";
import { GlobalContext } from "./GlobalContext";
import Timer from "./scripts/timer";

class App extends Component {
 // instance of websocket connection as a class property
  ws = new WebSocket("ws://localhost:1337");    

 // Create a state to share with all pages inside GlobalContext.Provider
 state = {
   websocket: this.socket,
   connected: false,
   response: null,
   timer: null,
   messages: null,
   uuid: null,
 }
 

 // When component mounted
 componentDidMount() {

    if(this.ws.readyState === WebSocket.CLOSED) {
      console.log("niet vebronden");
    }
    else {
      setInterval(() => {
        this.ws.send(JSON.stringify({
          command: 'getTimer',
          token: localStorage.getItem('token'),
          }));
        },5000);
    
        // When Websocket connection is opened.
         this.ws.onopen = () => {
         // on connecting, do nothing. This just needs to be here. DONT REMOVE
         }

         this.state.websocket = this.ws;
    
         this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const response = JSON.parse(evt.data)
            this.state.response = response;
            // Only send message to all connections that are connected with a specific session.
            if(response.token === localStorage.getItem("token")) {
    
              // Set the connection
              if(response.command === 'setConnected') {
                if(this.state.uuid === null) {
                  this.state.uuid = response.uuid;
                  this.state.connected = true;
                }
              }
    
              // Get timer and push it into the global state. 
              if(response.command === 'getTimer') {
                this.state.timer = response.timer;
              }

              if(response.command === 'getMessages') {
                this.state.response = response.messages;
              }
            }
         }
    
         // Close the websocket connection
         this.ws.onclose = () => {
          this.ws.close();
         }
    }
 }

render() {
  return (
    <div className="App">
      <Router>
        <GlobalContext.Provider value={{state: this.state}}>
          <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/information" exact component={() => <Information />} />
              <Route path="/explanation" exact component={() => <Explanation />} />
              <Route path="/buffer" exact component={() => <LoadingPage />} />
              <Route path="/conclusion" exact component={() => <ConclusionPage />} />
              <Route path="/login" exact component={() => <LoginPage />} />
              <Route path="/dashboard" exact component={() => <Dashboard />} />
              <Route path="/questiontest" exact component={() => <QuestionPage/>} />
              <Route path="/conclusionpage" exact component={() => <ConclusionPage />} />
              <Route path="/chat" exact component={() => <Chat /> } />
              <Route path="/personal" exact component={() => <Email />} />
              <Route path="/dashboard/dashboard-questions" exact component={() => <DashboardQuestionPage />} />  
              <Timer />
          </Switch>
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}
}

export default App;