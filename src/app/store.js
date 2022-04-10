import { configureStore } from "@reduxjs/toolkit";
import { landonApi } from "../services/landonApi";

export const store = configureStore({
    reducer: {
        [landonApi.reducerPath]: landonApi.reducer,
    },
});