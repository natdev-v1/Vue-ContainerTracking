import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue')
const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue')
// AppScreen import
import ImpSAT from '../screens/ImpSAP/ImpSAP.vue'
import MTDRScreen from '../screens/MTDRScreen/MTDRScreen.vue'
import LoginScreen from '../screens/LoginScreen/LoginScreen.vue'
import LOVScreen from '../screens/UserSetting/LOVScreen/LOVScreen.vue'
import LovAdd from '../screens/UserSetting/LOVScreen/LovAdd.vue'
import LovManage from '../screens/UserSetting/LOVScreen/LovManage.vue'
import ConstantScreen from '../screens/UserSetting/ConstantScreen/ConstantScreen.vue'
import ConstantAdd from '../screens/UserSetting/ConstantScreen/ConstantAdd.vue'
import organize from '../screens/ManageUser/organize/organize.vue'
import organizeDeatil from '../screens/ManageUser/organize/organizeDeatil.vue'
import role from '../screens/ManageUser/role/role.vue'
import roleDetail from '../screens/ManageUser/role/roleDetail.vue'
import user from '../screens/ManageUser/user/user.vue'
import userDetail from '../screens/ManageUser/user/userDetail.vue'
//End
// Pages
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue'

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue'

// Forms pages
const RegularForms  = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/RegularForms.vue')
const ExtendedForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/ExtendedForms.vue');
const ValidationForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/ValidationForms.vue')
const Wizard = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/Wizard.vue');

// TableList pages
const RegularTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/RegularTables.vue');
const ExtendedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/ExtendedTables.vue');
const PaginatedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/PaginatedTables.vue');
// Maps pages
const GoogleMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/GoogleMaps.vue')
const FullScreenMap = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/FullScreenMap.vue')
const VectorMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/VectorMapsPage.vue');

// Calendar
import Calendar from 'src/components/Dashboard/Views/Calendar/CalendarRoute.vue'
// Charts
const Charts = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Charts.vue')


//Object Screen App
let importSAP = {
  path: '/importData',
  component: DashboardLayout,
  redirect: '/importData/sap',
  children: [
    {
      path: 'sap',
      name: 'sap',
      component: ImpSAT
    }
  ]
}

let loginPage = {
  path: '/',
  name: 'Login',
  component: LoginScreen
}

let MTDR = {
  path: '/mtdr',
  component: DashboardLayout,
  redirect: '/mtdr/mtdr',
  children: [
    {
      path: 'mtdr',
      name: 'mtdr',
      component: MTDRScreen
    }
  ]
}

let usersetting ={
  path: '/usersetting',
  component: DashboardLayout,
  redirect: '/usersetting/organize',
  children: [
    {
      path: 'organize',
      name: 'organize',
      component: organize
    },
    {
      path: 'organizeDeatil',
      name: 'organizeDeatil',
      component: organizeDeatil
    },
    {
      path: 'role',
      name: 'role',
      component: role
    },
    {
      path: 'roleDetail',
      name: 'roleDetail',
      component: roleDetail
    },
    {
      path: 'user',
      name: 'user',
      component: user
    },
    {
      path: 'userDetail',
      name: 'userDetail',
      component: userDetail
    },
  ]
}
let datasetting ={
  path: '/datasetting',
  component: DashboardLayout,
  redirect: '/datasetting/lov',
  children: [
    {
      path: 'lov',
      name: 'Lov',
      component: LOVScreen
    },
    {
      path: 'lovadd',
      name: 'LovAdd',
      component: LovAdd
    },
    {
      path: 'lovmanage',
      name: 'LovManage',
      component: LovManage
    },
    {
      path: 'constant',
      name: 'Constant',
      component: ConstantScreen
    },
    {
      path: 'constantAdd',
      name: 'ConstantAdd',
      component: ConstantAdd
    },
  ]
}
// End
let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }

  ]
}
let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: RegularForms
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: ExtendedForms
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: ValidationForms
    },
    {
      path: 'wizard',
      name: 'Wizard',
      component: Wizard
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: ExtendedTables
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      component: PaginatedTables
    }]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: FullScreenMap
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: VectorMaps
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}


// let loginPage = {
//   path: '/login',
//   name: 'Login',
//   component: Login
// }
let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}
let overview ={
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  }
const routes = [
  overview,
  importSAP,
  MTDR,
  datasetting,
  componentsMenu,
  formsMenu,
  usersetting,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'widgets',
        name: 'Widgets',
        component: Widgets
      }
    ]
  },
  {path: '*', component: NotFound}
];

export default routes
