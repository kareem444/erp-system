import { createSlice } from '@reduxjs/toolkit'
import { ProductUiInitialState } from './ProductUiState'
import { REDUX } from 'src/common/constants/reduxConstants'
import {
    addProductAddition,
    addProductSize,
    addProductTax,
    changeProductType,
    removeAllProductAdditions,
    removeAllProductSize,
    removeAllProductTaxes,
    removeProductAddition,
    removeProductSize,
    removeProductTax
} from './ProductUiActions'

export const ProductUiSlice = createSlice({
    name: REDUX.slice.admin.productUi,
    initialState: ProductUiInitialState,
    reducers: {
        changeProductTypeAction: changeProductType,
        addProductSizeAction: addProductSize,
        removeProductSizeAction: removeProductSize,
        removeAllProductSizeAction: removeAllProductSize,
        addProductTaxAction: addProductTax,
        removeProductTaxAction: removeProductTax,
        removeAllProductTaxesAction: removeAllProductTaxes,
        addProductAdditionAction: addProductAddition,
        removeProductAdditionAction: removeProductAddition,
        removeAllProductAdditionsAction: removeAllProductAdditions
    }
})

export const {
    changeProductTypeAction,
    addProductSizeAction,
    removeProductSizeAction,
    removeAllProductSizeAction,
    addProductTaxAction,
    removeProductTaxAction,
    removeAllProductTaxesAction,
    addProductAdditionAction,
    removeProductAdditionAction,
    removeAllProductAdditionsAction
} = ProductUiSlice.actions

export default ProductUiSlice.reducer
