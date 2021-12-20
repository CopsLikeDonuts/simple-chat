import {createSelector} from "@reduxjs/toolkit";

export const selectMessages = createSelector(
    (store) => store.messages,
    ({loading, messages}) => ({loading, messages})
)
