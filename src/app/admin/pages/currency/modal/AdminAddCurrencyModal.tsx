import FormComponent from "src/common/components/FormComponent"
import { AdminAddCurrencyStructure } from "../structures/AdminAddCurrencyStructure"

export const AdminAddCurrencyModal = () => {
    return (
        <>
            <FormComponent {...AdminAddCurrencyStructure()} />
        </>
    )
}