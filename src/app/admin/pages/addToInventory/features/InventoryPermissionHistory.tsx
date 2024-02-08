import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'

export default function InventoryPermissionHistory() {
    const { translate } = useTranslate()
    const tableContent: ITableContent = {
        header: [`${translate(TRANSLATE.BILL_ID)}`,`${translate(TRANSLATE.STORE)}`, `${translate(TRANSLATE.STATUS)}`, `${translate(TRANSLATE.Date)}`],
        items: RECENT_TRANSACTIONS,
        selectors: {
            Store: (item: any) => `${item['store']}`,
            Status: (item: any) => `${item['status']}`,
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        nameSelector: (item: any) => item['bill-id']
    }
    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
