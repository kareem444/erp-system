import React, { useEffect } from 'react'
import TitleCardComponent from '../../../common/components/TitleCardComponent'
import {
    ITableContent,
    TableComponent
} from '../../../common/components/TableComponent'
import usePageTitle from '../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../common/constants/translateConstants'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { useLocation } from 'react-router-dom'

interface IAdminDetailsPageContainerProps {
    tableContent: ITableContent
    className?: string
    onRefresh?: () => void
}

export const AdminDetailsPageContainer: React.FC<
    IAdminDetailsPageContainerProps
> = ({ tableContent, className, onRefresh }) => {
    const { state: searchedItems, setState } = useEchoState<any[] | undefined>(EchoStateConstants.searchedItems)
    const { title } = usePageTitle()
    const { translate } = useTranslate()

    const { pathname } = useLocation()

    useEffect(() => {
        setState(tableContent.items)
    }, [pathname])

    return (
        <TitleCardComponent
            title={`${title} ${translate(TRANSLATE.DETAILS)}`}
            topMargin={'h-full overflow-y-hidden flex-1' + ' ' + className}
            onRefreshDataButtonClick={onRefresh}
        >
            <TableComponent {...tableContent} items={searchedItems ?? tableContent.items ?? []} />
        </TitleCardComponent>
    )
}
