import { takeLatest, all } from 'redux-saga/effects'
import {
    addMessageRequest,
    getMessagesRequest
} from "../reducers/messages";
import {addMessage, getMessages} from "./messages";

export default function* root() {
    yield all([
        takeLatest(getMessagesRequest, getMessages),
        takeLatest(addMessageRequest, addMessage)
    ])
}
