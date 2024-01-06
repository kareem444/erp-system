import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData';
import moment from 'moment';
import { ITableContent } from '../../../../../common/components/TableComponent';
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer';
import useModalReducer from 'src/common/redux/modal/useModalReducer';

export default function StoresDetailsFeature() {
    const { openModel } = useModalReducer();

    const openEditStoreModal = () => {
        openModel({
            modalComponent: 'adminEditStoreModal',
            size: '3xl',
            title: {
                text: 'Edit Store',
            },
        });
    };

    const openDeleteStoreModal = () => {
        openModel({
            modalComponent: 'adminDeleteStoreModal',
            size: 'sm',
            title: {
                text: 'Delete Store',
            },
            closeButton: {
                showCloseButton: true,
            },
            buttons: [
                {
                    text: 'Delete',
                },
            ],
        });
    };

    const tableContent: ITableContent = {
        header: ['Name', 'Date'],
        filter: ['Name'],
        defaultFilterItem: 'Date',
        showFilterDropDown: true,
        items: RECENT_TRANSACTIONS,
        selectors: {
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditStoreModal(),
            onDelete: (item: any) => openDeleteStoreModal(),
        },
        isDraggable: false,
        onDrag: (item: any) => {},
    };

    return <AdminDetailsPageContainer tableContent={tableContent} />;
}
