import store from './store'

export default (to, from, next) => {
    if (store.getters.user.id !== 0) {
        next()
    } else {
        next('/signin')
    }
}