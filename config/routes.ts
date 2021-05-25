export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                routes: [
                  {
                    path: '/admin/role',
                    name: '角色管理',
                    component: './admin/Role',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/permission',
                    name: '权限管理',
                    component: './admin/Permission',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/user',
                    name: '用户管理',
                    component: './admin/User',
                    authority: ['admin', 'user'],
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
