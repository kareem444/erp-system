import AdminAddAndSearchCustomerFeature from "./features/AdminAddAndSearchCustomerFeature"
import AdminCustomerDetailsFeature from "./features/AdminCustomersDetailsFeature"

function CustomersPage() {
    return (
        <>
            <AdminAddAndSearchCustomerFeature />
            <AdminCustomerDetailsFeature />
        </>
    )
}

export default CustomersPage