import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfUser: []
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (
            state: { users: Array<string> },
            action: {
                payload: {
                    name: string,
                    email: string,
                    password: string
                }
            }
        ) => {
            state.listOfUser = [...state?.listOfUser, action?.payload]
        }
    }
})

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer