import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routeNames from "./routeNames";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import ContentWrapper from "./components/ContentWrapper";
import { Provider as StoreProvider } from 'react-redux'
import configStore from "./store";

const store = configStore()

function App() {
  return (
      <StoreProvider store={store}>
          <div className={'App'}>
              <Header/>
              <ContentWrapper>
                  <BrowserRouter>
                      <Switch>
                          <Route exact path={routeNames.home}>
                              <Home/>
                          </Route>
                          <Route exact path={routeNames.chat}>
                              <ChatPage/>
                          </Route>
                      </Switch>
                  </BrowserRouter>
              </ContentWrapper>
          </div>
      </StoreProvider>

  );
}

export default App;
