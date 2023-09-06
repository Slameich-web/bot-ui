import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {api} from "@features/redux/api"

import {reducer as accountReducer} from "@features/account/slice"


const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    account: accountReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['account']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat([
        api.middleware
    ]),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
