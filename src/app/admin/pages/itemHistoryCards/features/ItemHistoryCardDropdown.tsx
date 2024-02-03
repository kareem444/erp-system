import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';
import DropDownSearchComponent from 'src/common/components/DropDownSearchComponent'
import { useTranslate } from '../../../../../common/hooks/useTranslate';
import { TRANSLATE } from 'src/common/constants/translateConstants';

const ItemHistoryCardDropdown = () => {
    const { translate } = useTranslate();
    const { isArabic } = useTranslate()
    const [result, setResult] = useState<any>({
        item: { name: 'Choose...', id: 0 },
    })
    console.log('yea storrrrrrre', result?.item.id);
    const [dateValue, setDateValue] = useState({
        startDate:new Date(),
        endDate: new Date()
    });
  

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 card bg-base-100 shadow-xl'>
    
      <Datepicker
                    onChange={
                        (newValue) => {
                            if(newValue){
                                console.log(typeof(newValue?.startDate));
                           setDateValue({ startDate: new Date(newValue?.startDate?.toString()?? ''), endDate : new Date(newValue?.endDate?.toString()?? '') })
                        }
                            console.log("datepickerValue:", newValue);
                        }
                    }
                    containerClassName=" "
                    value={dateValue}
                  //  inputClassName="input input-bordered w-full "
               
                    //onChange={handleDatePickerValueChange} 
                   // showShortcuts={true}
                   inputClassName="input input-bordered w-full"
                    toggleClassName="invisible"
                    primaryColor={"white"}
                />
                <DropDownSearchComponent
    onSelect={(_, dataItem) => setResult({ ...result, item: dataItem })}
    input={{
        placeholder: `${translate(TRANSLATE.FILTER_BY)} ${translate(TRANSLATE.ITEMS)}`
    }}
    icon = {{
        name: 'fi-rs-plus',
        iconOnExpanded: 'fi-br-minus',
        position: isArabic? 'left' : 'right'
    }}
    data = {
        [ { name: 'item 1', id: 1 },
    { name: 'item 2', id: 2 }, ]
}
    selectors={{text: 'name', value: 'id'}}
/>
        
        </div>
    )
}

export default ItemHistoryCardDropdown
