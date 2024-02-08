import { createSlice } from '@reduxjs/toolkit'
import { ProductUiInitialState } from './ProductUiState'
import { REDUX } from 'src/common/constants/reduxConstants'
import {
    addProductAddition,
    addProductSize,
    addProductTax,
    changeProductType,
    addCurrentStore,
    removeAllProductAdditions,
    removeAllProductSize,
    removeAllProductTaxes,
    removeProductAddition,
    removeProductSize,
    removeProductTax
} from './ProductUiActions'

export const InventoryUiSlice = createSlice({
    name: REDUX.slice.admin.productUi,
    initialState: ProductUiInitialState,
    reducers: {
        changeProductTypeAction: changeProductType,
        addCurrentStoreAction: addCurrentStore,
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
    addCurrentStoreAction,
    removeProductTaxAction,
    removeAllProductTaxesAction,
    addProductAdditionAction,
    removeProductAdditionAction,
    removeAllProductAdditionsAction
} = InventoryUiSlice.actions

export default InventoryUiSlice.reducer
