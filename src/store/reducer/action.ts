import { IUser } from './../../model/user';
import { UPDATE_USER_DETAIL } from '../constants';

export const updateUserDetail = (userDetail: IUser) => ({
    type: UPDATE_USER_DETAIL,
    payload: userDetail
})