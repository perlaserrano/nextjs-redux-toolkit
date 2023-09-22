import counterReducer from './redux/features/counter.Slice'
import {configureStore} from '@reduxjs/toolkit'
import {userApi} from './redux/services/usersApi'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        counterReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware:(getDefaultMiddleware) =>
 getDefaultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch