import { InputComponentProps } from "src/common/components/InputComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCurrencyInputsConstants } from "../constants/AdminCurrencyInputsConstants";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { IAdminCurrencyModel } from "src/app/admin/models/AdminCurrencyModel";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";

export const AdminCurrencyInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const { state: selectedCurrency } = useEchoState<IAdminCurrencyModel>(
        EchoStateConstants.selectedItem
    );

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminCurrencyInputsConstants.currencyName,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: "Is Default",
            type: "dropdownSearch",
            containerStyle: "!col-start-7",
            validatedInput: {
                name: AdminCurrencyInputsConstants.isdefault,
            },
            dropDownSearchInput: {
                data: [
                    { value: true, text: "True" },
                    { value: false, text: "False" },
                ],
                selectors: {
                    value: "value",
                    text: "text",
                },
                defaultSelectedValue: isEditModal
                    ? {
                        value: selectedCurrency.isdefault,
                        text: selectedCurrency.isdefault ? "True" : "False",
                    }
                    : undefined,
            },
        },
    ];
};
