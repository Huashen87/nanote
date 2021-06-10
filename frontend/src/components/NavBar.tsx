import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar, MainLogo, UserProfile, StyledHamburger, MenuBox } from './styles';

function NavBar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <StyledNavBar>
        <Hamburger visible={visible} setVisible={setVisible} />
        <MainLogo children={<Link to="/" children="Nanote" />} />
        <UserProfile children={<Link to="/user/NanoteUser" />} />
      </StyledNavBar>
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
  return (
    <StyledHamburger checked={visible}>
      <label onClick={() => setVisible(!visible)} children={<span />} />
    </StyledHamburger>
  );
}

interface HamburgerMenuProps {
  visible: boolean;
  setVisible: Function;
}

function Menu(props: HamburgerMenuProps) {
  const { visible, setVisible } = props;
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
    <MenuBox visible={visible}>
      {menuItems.map((item, index) => {
        return <MenuItem key={index} menuItem={item} setVisible={setVisible} />;
      })}
    </MenuBox>
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
  const { menuItem: item, setVisible } = props;
  return (
    <li
      children={<Link to={item.to} onClick={() => setVisible(false)} children={item.itemName} />}
    />
  );
}

export default NavBar;
