import Home from './components/home'
import About from './components/about'
import User from './components/user'
import NotFound from './components/notFound'

export default {
  public: [
    {path: '/', component: Home, exact: true},
    {path: '/about', component: About}
  ],

  private: [
    {path: '/user/:id', component: User}
  ],

  notFound: NotFound
}
