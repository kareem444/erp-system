import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'
import useComboOfferUiReducer from '../redux/ui/useComboOfferUiReducer'


export default function ComboOffersDetailsFeature() {
    const { openModel } = useModalReducer()

    const { removeComboOfferAllProductsToEdit } = useComboOfferUiReducer()

    const openEditComboOfferModal = () => {
        removeComboOfferAllProductsToEdit()
        openModel({
            modalComponent: 'adminEditComboOfferModal',
            size: '5xl',
            title: {
                text: 'Edit ComboOffer'
            },
            onClose: 'onEditComboOfferModalClose'
        })
    }

    const openDeleteComboOfferModal = () => {
        openModel({
            modalComponent: 'adminDeleteComboOfferModal',
            size: 'sm',
            title: {
                text: 'Delete ComboOffer'
            },
            closeButton: {
                showCloseButton: true
            },
            buttons: [
                {
                    text: 'Delete',
                }
            ]
        })
    }

    const tableContent: ITableContent = {
        header: ['Name', 'Date'],
        items: RECENT_TRANSACTIONS,
        selectors: {
            Date: (item: any) => moment(item['date']).format('D MMM')
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditComboOfferModal(),
            onDelete: (item: any) => openDeleteComboOfferModal()
        },
        isDraggable: false,
        onDrag: (item: any) => { }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
