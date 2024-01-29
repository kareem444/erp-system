import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCustomersInputsItemsStructure } from "./AdminCustomersInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";

export const AdminAddCustomerFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();

        const handelOnSubmit = (data: IAdminCustomerInputs) => console.log(data);

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-plus",
            isLoading: false,
        };

        const defaultValues: IAdminCustomerInputs = {
            name: "",
            mobile: "",
            taxNumber: "",
            address: "",
        };

        return {
            inputs: AdminCustomersInputsItemsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
