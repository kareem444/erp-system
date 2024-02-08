import { createSlice } from '@reduxjs/toolkit'
import { ProductUiInitialState } from './ProductUiState'
import { REDUX } from 'src/common/constants/reduxConstants'
import {
    addProductSize,
    changeProductType,
    addCurrentStore,
    addAgentType,
    removeAllProductSize,
    removeProductSize
} from './ProductUiActions'

export const DisbursementInventoryUiSlice = createSlice({
    name: REDUX.slice.admin.productUi,
    initialState: ProductUiInitialState,
    reducers: {
        changeProductTypeAction: changeProductType,
        addCurrentStoreAction: addCurrentStore,
        addAgentTypeAction: addAgentType,
        addProductSizeAction: addProductSize,
        removeProductSizeAction: removeProductSize,
        removeAllProductSizeAction: removeAllProductSize
    }
})

export const {
    changeProductTypeAction,
    addProductSizeAction,
    removeProductSizeAction,
    removeAllProductSizeAction,
    addCurrentStoreAction,
    addAgentTypeAction
} = DisbursementInventoryUiSlice.actions

export default DisbursementInventoryUiSlice.reducer
