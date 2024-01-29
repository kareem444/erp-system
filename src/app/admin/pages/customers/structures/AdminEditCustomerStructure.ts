import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCustomersInputsItemsStructure } from "./AdminCustomersInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";

export const AdminEditCustomerModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();

        const handelOnSubmit = (data: IAdminCustomerInputs) => console.log(data);

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-pencil",
            isLoading: false,
        };

        const defaultValues: IAdminCustomerInputs = {
            name: "kareem",
            mobile: "01215",
            taxNumber: "1211212",
            address: "any where",
        };

        return {
            inputs: AdminCustomersInputsItemsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
