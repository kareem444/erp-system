import { useState } from 'react'
import BasicInputComponent from 'src/common/components/BasicInputComponent'
import DropDownSearchComponent from 'src/common/components/DropDownSearchComponent'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'
import { useTranslate } from '../../../../../common/hooks/useTranslate'

const InventorySelector = () => {
    const { translate, isArabic } = useTranslate()

    const [result, setResult] = useState<any>({
        store: { name: 'Choose...', id: 0 },
        itemGroup: { name: 'Choose...', id: 0 }

    })
    console.log('yea storrrrrrre', result?.store.id);
    console.log('yea item', result?.itemGroup.id);


    return (
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 card bg-base-100 shadow-xl'>
                    <DropDownSearchComponent
                onSelect={(_, dataItem) => setResult({ ...result, store: dataItem })}
                input={{
                    placeholder: `${translate(TRANSLATE.FILTER_BY)} ${translate(TRANSLATE.STORE)}`
                }}
                icon = {{
                    name: 'fi-rs-plus',
                    iconOnExpanded: 'fi-br-minus',
                    position: isArabic? 'left' : 'right'
                }}
                data = {
                    [ { name: 'store 1', id: 1 },
                { name: 'store 2', id: 2 }, ]
            }
                selectors={{text: 'name', value: 'id'}}
            />
                        
                    <DropDownSearchComponent
                onSelect={(_, dataItem) => setResult({ ...result, itemGroup: dataItem })}
                input={{
                    placeholder: `${translate(TRANSLATE.FILTER_BY)} ${translate(TRANSLATE.ITEMS_GROUPS)}`
                }}
                icon = {{
                    name: 'fi-rs-plus',
                    iconOnExpanded: 'fi-br-minus',
                    position: isArabic? 'left' : 'right'
                }}
                data = {
                    [  { name: 'itemGroup 1', id: 1 },
                    { name: 'itemGroup 2', id: 2 }, ]
            }
                selectors={{text: 'name', value: 'id'}}
            />
                    </div>
                
    )
}

export default InventorySelector
