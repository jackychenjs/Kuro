const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')

export default [{
    path: '/',
    component: home
}]
