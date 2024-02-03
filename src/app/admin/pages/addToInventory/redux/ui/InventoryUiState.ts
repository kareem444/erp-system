export interface InventoryUiState {
    productType?: 'hide' | 'show',
    store?: string,
    data?: {
        productSizes?: { size: string, price: string }[]
        productAdditions?: { id: string, name: string }[]
        productTaxes?: { id: string, name: string }[]
    }
}