import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';

export const SidebarData = (lang) => { return [
  {
    title: ((lang) => {if (lang === "vi") return 'Trang chủ'; else return 'Home'})(lang),
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Menu',
    path: '/ordering',
    icon: <CgIcons.CgMenuBoxed />,
    cName: 'nav-text'
  },
  {
    title: ((lang) => {if (lang === "vi") return 'Đồ ăn'; else return 'Food'})(lang),
    path: '/food-menu',
    icon: <MdIcons.MdFoodBank />,
    cName: 'nav-text'
  },
  {
    title: ((lang) => {if (lang === "vi") return 'Thức uống'; else return 'Drink'})(lang),
    path: '/drink-menu',
    icon: <MdIcons.MdLocalDrink />,
    cName: 'nav-text'
  },
  {
    title: ((lang) => {if (lang === "vi") return 'Tìm kiếm'; else return 'Search'})(lang),
    path: '/search_item',
    icon: <AiIcons.AiOutlineSearch />,
    cName: 'nav-text'
  },
];
}