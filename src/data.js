import {

  MdOutlineDashboard,

  MdAccountCircle,

  MdAnalytics,

  MdOutlineSettings,

  MdLogout,

} from 'react-icons/md';

import {

  BsChevronDown,

  BsChatLeftText,

  BsCalendarCheck,

  BsFiles,

  BsServer,

} from 'react-icons/bs';

export const sidebarMenu = [

  { title: 'Dashboard', src: 'Chart_fill', icon: <MdOutlineDashboard /> },

  { title: 'Inbox', src: 'Chat', icon: <BsChatLeftText /> },

  { title: 'Accounts', src: 'User', gap: true, icon: <MdAccountCircle /> },

  { title: 'Schedule ', src: 'Calendar', icon: <BsCalendarCheck /> },

  {

    title: 'Services',

    src: 'Services',

    icon: <BsServer />,

    subMenus: [

      {

        title: 'Service 1',

        src: '/services/services1',



        cName: 'sub-nav',

      },

      {

        title: 'Service 2',

        src: '/services/services2',



        cName: 'sub-nav',

      },

      {

        title: 'Service 3',

        src: '/services/services3',

      },

    ],

  },

  { title: 'Analytics', src: 'Chart', icon: <MdAnalytics /> },

  { title: 'Files ', src: 'Folder', gap: true, icon: <BsFiles /> },

  { title: 'Setting', src: 'Setting', icon: <MdOutlineSettings /> },

  { title: 'Logout', src: 'Logout', icon: <MdLogout /> },

];
