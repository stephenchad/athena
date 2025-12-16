/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 16/12/2025 - 10:18:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/12/2025
    * - Author          : 
    * - Modification    : 
**/
import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    loading: false,
    error: null,
    products: [],
    product: null,
    pagination: {},
    favouritesToggled: true,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setProducts: (state, action) => { 
            state.loading = false;
            state.error = null;
            state.products = action.payload
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setPagination: (state, action) => {
            state.pagination = action.payload
        }
    },
});

export const {
    setLoading, setError, setProducts, setPagination
} = productSlice.actions;

export default productSlice.reducer;

export const productSelector = (state) => state.products;
 
