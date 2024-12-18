import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  FileImageOutlined,
  GiftOutlined,
  ShopOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'sidenav.dashboard',
      path: '',
      title: 'sidenav.dashboard',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'new-component-child-key',
      path: '',
      title: 'sidenav.catalog.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'products',
          path: '/app/product',
          title: 'sidenav.catalog.products',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'categories',
          path: '/app/new-component-path-2',
          title: 'sidenav.catalog.categories',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'collections',
          path: '/app/new-component-path-1',
          title: 'sidenav.catalog.collections',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'combos',
          path: '/app/new-component-path-2',
          title: 'sidenav.catalog.combos',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'sidenav.apps.ecommerce.orders',
      path: '',
      title: 'sidenav.apps.ecommerce.orders',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'sidenav.clients',
      path: '',
      title: 'sidenav.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'sidenav.clientsList',
          path: '/app/client-list',
          title: 'sidenav.clientsList',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'sidenav.clientGroups',
          path: '/app/new-component-path-2',
          title: 'sidenav.clientGroups',
          breadcrumb: true,
          submenu: []
        }
      ]
    },

    {
      key: 'sidenav.banners',
      path: '',
      title: 'sidenav.banners',
      icon: FileImageOutlined,
      breadcrumb: true,
      submenu: []
    },

    {
      key: 'sidenav.promoCodes',
      path: '',
      title: 'sidenav.promoCodes',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },

    {
      key: 'sidenav.offlinePoints',
      path: '',
      title: 'sidenav.offlinePoints',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'sidenav.offlinePoints.addresses',
          path: '/app/new-component-path-1',
          title: 'sidenav.offlinePoints.addresses',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'sidenav.offlinePoints.geofences',
          path: '/app/new-component-path-2',
          title: 'sidenav.offlinePoints.geofences',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    ]
  }
]


const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;


{/*
  
      {
        key: 'sidenav.products',
        path: `${APP_PREFIX_PATH}/products`,
        title: 'sidenav.products',
        icon: DashboardOutlined,
        breadcrumb: false,
      },
      {
        key: 'sidenav.categories',
        path: `${APP_PREFIX_PATH}/categories`,
        title: 'sidenav.categories',
        icon: DashboardOutlined,
        breadcrumb: false,

      },

      {
        key: 'sidenav.collections',
        path: `${APP_PREFIX_PATH}/collections`,
        title: 'sidenav.collections',
        icon: DashboardOutlined,
        breadcrumb: false,
      },

      {
        key: 'sidenav.combos',
        path: `${APP_PREFIX_PATH}/combos`,
        title: 'sidenav.combos',
        icon: DashboardOutlined,
        breadcrumb: false,
      },
    
  */}