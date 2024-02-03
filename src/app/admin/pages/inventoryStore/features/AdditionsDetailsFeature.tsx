import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'

//import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function AdditionsDetailsFeature() {
   // const { openModel } = useModalReducer()

    // const openEditAdditionModal = () => {
    //     openModel({
    //         modalComponent: 'adminEditAdditionModal',
    //         size: '3xl',
    //         title: {
    //             text: 'Edit Addition'
    //         },
    //     })
    // }

    // const openDeleteAdditionModal = () => {
    //     openModel({
    //         modalComponent: 'adminDeleteAdditionModal',
    //         size: 'sm',
    //         title: {
    //             text: 'Delete Addition'
    //         },
    //         closeButton: {
    //             showCloseButton: true
    //         },
    //         buttons: [
    //             {
    //                 text: 'Delete',
    //             }
    //         ]
    //     })
    // }
    const { translate } = useTranslate()
    const tableContent: ITableContent = {
        header: [`${translate(TRANSLATE.STORE)}`, `${translate(TRANSLATE.ITEMS_GROUPS)}`, `${translate(TRANSLATE.Date)}`],
        items: RECENT_TRANSACTIONS,
        showFilterDropDown: true,
        filter: ['Store', 'Item-groups'],
        selectors: {
            ItemGroups: (item: any) => item['item-groups'],
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
       storeSelector: (item: any) => item['store'],
        // buttons: {
        //     onEdit: (item: any) => openEditAdditionModal(),
        //     onDelete: (item: any) => openDeleteAdditionModal(),
        // }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
