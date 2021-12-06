import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  Router as BrowserRouter ,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import { AppRoute } from 'const';
import browserHistory from '../../browser-history';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter history={browserHistory}>Í
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
      </BrowserRouter>
  </ThemeProvider>
);

export default App;
