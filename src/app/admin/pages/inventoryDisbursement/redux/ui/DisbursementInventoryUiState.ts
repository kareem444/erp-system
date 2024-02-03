export interface DisbursementInventoryUiState {
    productType?: 'hide' | 'show',
    store?: string,
    agentType?: string,
    agentName?: string,
    data?: {
        productSizes?: { size: string, price: string }[]
    }
}