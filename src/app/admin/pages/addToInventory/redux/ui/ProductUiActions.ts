import { InventoryUiState } from './InventoryUiState'

export const changeProductType = (
    state: InventoryUiState,
    action: {
        payload: InventoryUiState
        type: string
    }
) => {
    const { productType } = action.payload
    state.productType = productType
}
export const addCurrentStore = (
    state: InventoryUiState,
    action: {
        payload: InventoryUiState
        type: string
    }
) => {
    const { store } = action.payload
    state.store = store
}

export const addProductSize = (
    state: InventoryUiState,
    action: {
        payload: { size: string, price: string }
        type: string
    }
) => {
    const { size, price } = action.payload
    state.data?.productSizes?.push({ size, price })
}

export const removeProductSize = (
    state: InventoryUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productSizes?.splice(index, 1)
}

export const removeAllProductSize = (
    state: InventoryUiState,
) => {
    if (state.data?.productSizes) {
        state.data.productSizes = []
    }
}

export const addProductTax = (
    state: InventoryUiState,
    action: {
        payload: { id: string, name: string }
        type: string
    }
) => {
    const { id, name } = action.payload
    const isTaxExist = state.data?.productTaxes?.find((tax) => tax.id === id)
    if (!isTaxExist) {
        state.data?.productTaxes?.push({ id, name })
    }
}

export const removeProductTax = (
    state: InventoryUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productTaxes?.splice(index, 1)
}

export const removeAllProductTaxes = (
    state: InventoryUiState,
) => {
    if (state.data?.productTaxes) {
        state.data.productTaxes = []
    }
}

export const addProductAddition = (
    state: InventoryUiState,
    action: {
        payload: { id: string, name: string }
        type: string
    }
) => {
    const { id, name } = action.payload
    const isAdditionExist = state.data?.productAdditions?.find((addition) => addition.id === id)
    if (!isAdditionExist) {
        state.data?.productAdditions?.push({ id, name })
    }
}

export const removeProductAddition = (
    state: InventoryUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productAdditions?.splice(index, 1)
}

export const removeAllProductAdditions = (
    state: InventoryUiState,
) => {
    if (state.data?.productAdditions) {
        state.data.productAdditions = []
    }
}