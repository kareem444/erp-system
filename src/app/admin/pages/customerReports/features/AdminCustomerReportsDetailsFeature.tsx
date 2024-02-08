import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'

export default function AdminCustomerReportsDetailsFeature() {
    const tableContent: ITableContent = {
        header: ['Name', 'Email', 'Location', 'Amount', 'Date'],
        items: RECENT_TRANSACTIONS,
        selectors: {
            Email: (item: any) => item['email'],
            Location: (item: any) => item['location'],
            Amount: (item: any) => `$${item['amount']}`,
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        nameSelector: (item: any) => item['name'],
        buttons:{
            onView(item) {
                console.log('onView', item)
            },
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
