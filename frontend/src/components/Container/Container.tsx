import { Switch, Route } from 'react-router';
import './Container.css';

function Container() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <h1>主頁</h1>
        </Route>
        <Route path="/my-notes">
          <h1>我的筆記</h1>
        </Route>
        <Route path="/public-notes">
          <h1>公開的筆記</h1>
        </Route>
        <Route path="/saved-notes">
          <h1>儲存的筆記</h1>
        </Route>
        <Route path="/following-notes">
          <h1>關注中的筆記</h1>
        </Route>
        <Route path="/new-note">
          <h1>撰寫筆記</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
