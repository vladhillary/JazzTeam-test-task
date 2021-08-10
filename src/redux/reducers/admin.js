const initialState = {
    login: 'Admin',
    password: '12345678',
    auth: false,
    age: 25,
    country: 'Belarus',
    city: 'Minsk',
    salary: '550$',
    bankAccount: '1000$',
    email: 'fakeadmin@gmail.com',
    phone: '+375-29-551-92-14'

}

const admin = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_AUTH':
            return {
                ...state,
                auth: action.payload
            }

        default: return state

    }

}
export default admin