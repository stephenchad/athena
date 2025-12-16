/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 16/12/2025 - 10:51:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/12/2025
    * - Author          : 
    * - Modification    : 
**/

import { setProducts, setLoading, setError, setPagination  } from "../slices/product";
import axios from 'axios'

const fetchProducts = () => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await axios.get('/api/products');
        console.log('API Response:', data);
        dispatch(setProducts(data.products));
        dispatch(setPagination(data.pagination || {}));
    } catch (error) {
        console.error('API Error:', error);
        dispatch(
            setError(
                error?.response?.data?.message
                || error?.message
                || 'An expected error has occurred. Please try again later.'
            )
        );
    }
}

export default fetchProducts;
