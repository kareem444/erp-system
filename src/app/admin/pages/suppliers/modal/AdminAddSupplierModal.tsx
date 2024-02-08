import FormComponent from "src/common/components/FormComponent"
import { AdminAddSupplierStructure } from "../structures/AdminAddSupplierStructure"

export const AdminAddSupplierModal = () => {
    return (
        <>
            <FormComponent {...AdminAddSupplierStructure()} />
        </>
    )
}