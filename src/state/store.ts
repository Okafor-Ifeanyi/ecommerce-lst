import { configureStore } from '@reduxjs/toolkit';
import skipReducer from './LoadProduct/skipSlice';
import { dummyProducts } from '../services/dummyJsonApi';

export const store = configureStore({
    reducer: {
        skip: skipReducer,
        [dummyProducts.reducerPath]: dummyProducts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyProducts.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch