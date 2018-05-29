
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { name: 'Início', path: '', component: () => import('pages/index') },
      { name: 'Requisição', path: 'requisicao', component: () => import('pages/Requisicao') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
