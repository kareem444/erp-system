import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'

export default function ProductsReportsDetailsFeature() {
    const { translate } = useTranslate();
    const tableContent: ITableContent = {
        header: [`${translate(TRANSLATE.TRANSACTION_ID)}`, `${translate(TRANSLATE.AMOUNT)}`, `${translate(TRANSLATE.QUANTITY)}`,`${translate(TRANSLATE.TRANSACTION_TYPE)}`,`${translate(TRANSLATE.Date)}`],
        items: RECENT_TRANSACTIONS,
        selectors: {
            Amount: (item: any) => `${item['amount']} $`,
            Quantity: (item: any) => `${item['quantity']}`,
            TransactionType: (item: any) => `${item['transaction-type']}`,
            Date: (item: any) => moment(item['date']).format('D MMM'),
    
        },
        nameSelector: (item: any) => item['transaction-id']
    }
    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
