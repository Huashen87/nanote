import { Switch, Route } from 'react-router';
import { StyledContainer } from '../components/styles';
import NewNote from './NewNote';
import Note from './Note';

function Container() {
  return (
    <StyledContainer>
      <div>
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
            <NewNote />
          </Route>
          <Route path="/user/:id">
            <h1>個人資料</h1>
          </Route>
          <Route path="/edit-profile">
            <h1>編輯個人資料</h1>
          </Route>
          <Route path="/note/:id">
            <Note />
          </Route>
          <Route exact path="/tags">
            <h1>所有標籤</h1>
          </Route>
          <Route path="/tags/:id">
            <h1>標籤</h1>
          </Route>
        </Switch>
      </div>
    </StyledContainer>
  );
}

export default Container;
