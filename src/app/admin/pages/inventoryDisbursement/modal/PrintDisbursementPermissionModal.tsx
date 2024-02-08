import FormComponent from 'src/common/components/FormComponent'
import { PrintDisbursementPermissionFormStructure } from '../structure/AdminPrintDisbursementPermissionStructure'

const PrintDisbursementPermissionModal = () => {

    return (
        <>
            <div className='flex gap-10'>
                <FormComponent
                    {...PrintDisbursementPermissionFormStructure()}
                />
            </div>
        </>
    )
}

export default PrintDisbursementPermissionModal
