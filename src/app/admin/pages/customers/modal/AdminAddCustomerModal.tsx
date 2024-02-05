import FormComponent from "src/common/components/FormComponent"
import { AdminAddCustomerStructure } from "../structures/AdminAddCustomerStructure"

export const AdminAddCustomerModal = () => {
    return (
        <>
            <FormComponent {...AdminAddCustomerStructure()} />
        </>
    )
}