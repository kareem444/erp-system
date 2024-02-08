import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/translateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import { IDropDownSearchItemProperties } from 'src/common/components/DropDownSearchComponent'

export const ProductInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()

    const {
        state,
        changeProductType,
        addCurrentStore,
        removeAllProductSize,
        addProductTax,
        addProductAddition
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

    const handelOnAddTax = (value: IDropDownSearchItemProperties) => { 
        addProductTax({ id: value.value, name: value.text })
    }

    const handelOnAddAddition = (value: IDropDownSearchItemProperties) => { 
        addProductAddition({ id: value.value, name: value.text })
    }

    return [
        {
            labelTitle: `${translate(TRANSLATE.STORE)}`,
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
                    { id: 0, name: 'choose' },
                    { id: 1, name: 'Fixed Size' },
                    { id: 2, name: 'Multi Size' },
                    { id: 3, name: 'Hana' },
                    { id: 4, name: 'Omar' },
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                defaultSelectedValue: { id: 0, name: 'choose' }
            }
        }
    ]
}
