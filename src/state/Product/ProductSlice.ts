import { createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number
    imageSrc: string
    title: string
    description: string
    oldPrice: string
    newPrice: string
}

interface ProductState {
    products: Product[]
    isLoading: boolean
}

const initialState: ProductState = {
    products: [],
    isLoading: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setProducts, setLoading } = productSlice.actions
export default productSlice.reducer;