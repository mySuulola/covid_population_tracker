import { IUser } from './../../model/user';
import { UPDATE_USER_DETAIL, REGISTER_EVENT } from '../constants';

export const updateUserDetail = (userDetail: IUser) => ({
    type: UPDATE_USER_DETAIL,
    payload: userDetail
})
export const addNewEvent = (eventDetails: any) => {
    console.log(eventDetails + "gjhghj")
    return ({
        type: REGISTER_EVENT,
        payload: eventDetails
    })
}