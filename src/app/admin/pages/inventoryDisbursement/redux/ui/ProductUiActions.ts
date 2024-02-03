import { DisbursementInventoryUiState } from './DisbursementInventoryUiState'

export const changeProductType = (
    state: DisbursementInventoryUiState,
    action: {
        payload: DisbursementInventoryUiState
        type: string
    }
) => {
    const { productType } = action.payload
    state.productType = productType
}
export const addCurrentStore = (
    state: DisbursementInventoryUiState,
    action: {
        payload: DisbursementInventoryUiState
        type: string
    }
) => {
    const { store } = action.payload
    state.store = store
}
export const addAgentType = (
    state: DisbursementInventoryUiState,
    action: {
        payload: DisbursementInventoryUiState
        type: string
    }
) => {
    const { agentType } = action.payload
    
    state.agentType = agentType
}
export const addProductSize = (
    state: DisbursementInventoryUiState,
    action: {
        payload: { size: string, price: string }
        type: string
    }
) => {
    const { size, price } = action.payload
    state.data?.productSizes?.push({ size, price })
}

export const removeProductSize = (
    state: DisbursementInventoryUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productSizes?.splice(index, 1)
}

export const removeAllProductSize = (
    state: DisbursementInventoryUiState,
) => {
    if (state.data?.productSizes) {
        state.data.productSizes = []
    }
}
