import {addMessageError, addMessageSuccess, getMessagesError, getMessagesSuccess} from "../../reducers/messages";
import { put, select } from 'redux-saga/effects'

export function* getMessages() {
    try {
        const data = localStorage.getItem('messages')

        yield put(getMessagesSuccess(data ? JSON.parse(data) : []))
    } catch (error) {
        put(getMessagesError())
    }
}

export function* addMessage(payload) {

    const { messages } = yield select((state) => state.messages)

    try {
        const { userName, message } = payload.payload

        const data = {
            userName,
            message
        }

        localStorage.setItem('messages', JSON.stringify([...messages, data]))

        yield put(addMessageSuccess(data))
    } catch (error) {
        put(addMessageError())
    }
}
