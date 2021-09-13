import { createStore } from 'redux'
import rootReducer from './reducers'


const checkStoreInLocalStorage = () => {

    const oldState = JSON.parse(window.localStorage.getItem('oldState'))

    const initialState = {
        login: 'Admin',
        auth: false,
        age: 25,
        country: 'Belarus',
        city: 'Minsk',
        salary: '550$',
        bankAccount: '1000$',
        email: 'fakeadmin@gmail.com',
        phone: '+375-29-551-92-14'
    }

    if (!oldState) return initialState

    return oldState
}

const store = createStore(rootReducer, checkStoreInLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const saveStateInLocalStorage = (state) => {

    try {

        window.localStorage.setItem('oldState', JSON.stringify(state))

    } catch (err) {

        console.log(err)

    }
}

store.subscribe(() => {
    saveStateInLocalStorage(store.getState())
});

export default store