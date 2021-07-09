import createReducer, { RESET_STORE } from '../createReducer';
import { showToast, errorHTTP } from '@utils/helpers'
import { EnrollUser } from '@types';

export const GET_USER= 'Enroll.GET_USER';
export const UPDATE_USER = 'Enroll.UPDATE_USER';
export const CLEAR = 'Enroll.CLEAR';

// ------------------------------------
// Actions
// ------------------------------------
export const createUser = (userObj: any, callback: any) => (
    dispatch: any,
    getState: any,
    { fetch }: any,
) => {
    const {token, user} = getState().user;
    const url = ``;
    return fetch(url, {
        method: 'POST',
        contentType: 'application/json',
        token,
        success: async (res: any) => {
            console.log('======res', res);
            if (res.data) {
                callback && callback(res.data);
            } else callback && callback();
        },
        failure: (err: any) => {
            callback && callback();
            errorHTTP(err);
        },
    });
};


export const updateUser = (data: any, callback: any) => 
    async (dispatch: any, getState: any, {fetch}: any) => {
        const user = getState().enrollUser;
        const updatedUser = {
            ...user,
            ...data
        };
        dispatch({type: UPDATE_USER, updatedUser });
}

export const clear = () => ({ type: CLEAR });

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: EnrollUser = {
    fullName: '',
    image_id: '',
    countryCode: '',
    countryOfOrigin: '',
    email: '',
    password: '',
    countryOfResidence: '',
    dateofBirth: '',
    receive_notification: false,
    pin: '',
    questionOne: '',
    answerOne: '',
    questionTwo: '',
    answerTwo: '',
    questionThree: '',
    answerThree: '',
    loading: false
};

export default createReducer(initialState, {
    [GET_USER]: (state: any, { ...userObj }) => ({
        ...userObj
    }),
    [UPDATE_USER]: (state: any, { ...userObj }) => ({
        ...userObj
    }),
    [CLEAR]: (state: any, action: any) => RESET_STORE,
});
