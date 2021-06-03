import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="navbar">
        <Hamburger visible={visible} setVisible={setVisible} />
        <MainLogo />
        <UserProfile />
      </div>
      <Menu visible={visible} setVisible={setVisible} />
    </>
  );
}

interface HamburgerProps {
  visible: boolean;
  setVisible: Function;
}

function Hamburger(props: HamburgerProps) {
  const { visible, setVisible } = props;
  const menuButtonClassName = 'menu__btn' + (visible ? ' checked' : '');
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" onClick={() => setVisible(!visible)} />
      <label className={menuButtonClassName} htmlFor="menu__toggle">
        <span></span>
      </label>
    </div>
  );
}

interface HamburgerMenuProps {
  visible: boolean;
  setVisible: Function;
}

function Menu(props: HamburgerMenuProps) {
  const { visible, setVisible } = props;
  const menuClassName = 'menu__box' + (visible ? ' show' : '');
  const mockMenuItems: MenuItemInfo[] = [
    { itemName: '主頁', to: '/' },
    { itemName: '我的筆記', to: '/my-notes' },
    { itemName: '公開的筆記', to: '/public-notes' },
    { itemName: '儲存的筆記', to: '/saved-notes' },
    { itemName: '關注中的筆記', to: '/following-notes' },
    { itemName: '撰寫筆記', to: '/new-note' },
  ];
  const menuItems = mockMenuItems;
  return (
    <ul className={menuClassName}>
      {menuItems.map((item, index) => {
        return <MenuItem key={index} menuItem={item} setVisible={setVisible} />;
      })}
    </ul>
  );
}

interface MenuItemInfo {
  itemName: string;
  to: string;
}

interface MenuItemProps {
  menuItem: MenuItemInfo;
  setVisible: Function;
}

function MenuItem(props: MenuItemProps) {
  const { menuItem, setVisible } = props;
  return (
    <li>
      <Link className="menu__item" to={menuItem.to} onClick={() => setVisible(false)}>
        {menuItem.itemName}
      </Link>
    </li>
  );
}

function MainLogo() {
  return <div className="mainLogo">Nanote</div>;
}

function UserProfile() {
  return (
    <div className="userProfile">
      <span className="userProfile-circle"></span>
    </div>
  );
}

export default NavBar;
