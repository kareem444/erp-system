import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/translateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import { IDropDownSearchItemProperties } from 'src/common/components/DropDownSearchComponent'

export const InventoryDisbursementInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()

    const {
        changeProductType,
        addCurrentStore,
        addAgentType,
        removeAllProductSize,
    } = useProductUiReducer()

    const handelOnProductTypeSelect = (value: IDropDownSearchItemProperties) => {
        if (value.value === 0) {
            changeProductType({ productType: 'hide' })
            addCurrentStore({ store: value.text })
            removeAllProductSize();
            return;
        }
        changeProductType({ productType: 'show' })
        addCurrentStore({ store: value.text })
        removeAllProductSize();
    }

    const handelOnAgencySelect = (value: IDropDownSearchItemProperties) => {
            addAgentType({ agentType: value.text })
            console.log(value.text);
    }

    return [
        {
            labelTitle: `${translate(TRANSLATE.PRODUCT_TYPE)}`,
            type: 'dropdownSearch',
            containerStyle: '',
            validatedInput: {
                name: 'group',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                onSelect: handelOnProductTypeSelect,
                data: [
                    { id: 0, name: `${translate(TRANSLATE.CHOOSE)}` },
                    { id: 1, name: 'Fixed Size' },
                    { id: 2, name: 'Multi Size' },
                    { id: 3, name: 'Hana' },
                    { id: 4, name: 'Omar' },
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                defaultSelectedValue: { id: 0, name: `${translate(TRANSLATE.CHOOSE)}` }
            }
        },
        {
            labelTitle: `${translate(TRANSLATE.AGENT_TYPE)}`,
            type: 'dropdownSearch',
            containerStyle: '',
            validatedInput: {
                name: 'group',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                onSelect: handelOnAgencySelect,
                data: [
                    { id: 0, name: `${translate(TRANSLATE.WITHOUT_AGENT)}` },
                    { id: 1, name: `${translate(TRANSLATE.AGENT_NAME)}` },
                    { id: 2, name: `${translate(TRANSLATE.SUPPLIER)}` },
                    { id: 3, name: `${translate(TRANSLATE.STORE)}` },
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                defaultSelectedValue: { id: 0, name: `${translate(TRANSLATE.WITHOUT_AGENT)}`  }
            }
        },
        {
            labelTitle: `${translate(TRANSLATE.AGENT_NAME)}`,
            containerStyle: '',
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: false,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: `${translate(TRANSLATE.Date)}`,
            type: 'datetime-local',
            validatedInput: {
                name: 'Date',
                rules: {
                    isRequired: true,
                   
                }
            }
        },
    ]
}
