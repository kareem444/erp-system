import ProductsReportsDetailsFeature from "./features/ProductsReportsDetailsFeature"
import ItemHistoryCardDropdown from "./features/ItemHistoryCardDropdown"


function ProductsReportsPage() {
    return (
        <>
        <ItemHistoryCardDropdown/>
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ProductsReportsDetailsFeature />
        </>
    )
}

export default ProductsReportsPage
