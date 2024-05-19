import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/UserSlice'
import baseApi from './features/Api/Api'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    // devTools: process.env.NODE_ENV === 'dev', // hide redux dev tool in production server
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']