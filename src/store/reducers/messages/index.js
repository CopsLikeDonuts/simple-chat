const {createSlice} = require("@reduxjs/toolkit");
const initialState = {
    messages: [],
    loading: false,
    error: ''
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        getMessagesRequest: (state, payload) => {
            state.loading = true
        },
        getMessagesSuccess: (state, {payload}) => {
            state.loading = false
            state.messages = payload
        },
        getMessagesError: (state) => {
            state.loading = false
            state.error = 'Error during fetching messages'
        },
        addMessageRequest: (state) => {
          state.loading = true
        },
        addMessageSuccess: (state, {payload}) => {
            state.loading = false
            state.messages = [...state.messages, { userName: payload.userName, message: payload.message }]
        },
        addMessageError: (state) => {
            state.loading = false
            state.error = 'Error during sending message'
        }
    }
})

export const {
    getMessagesRequest,
    getMessagesSuccess,
    getMessagesError,

    addMessageRequest,
    addMessageSuccess,
    addMessageError
} = messagesSlice.actions

export const { reducer } = messagesSlice
