import 'react-notifications/lib/notifications.css'
import AdminPageContainer from '../../app/admin/containers/AdminPageContainer'
import ModalLayoutContainer from './ModalContainer'
import RightSidebarContainer from './RightSidebarContainer'
import PosPageContainer from 'src/app/pos/containers/PosPageContainer'

function LayoutContainer() {
    return (
        <>
            {true ? <AdminPageContainer /> : <PosPageContainer />}

            {/* Right drawer - containing secondary content like notifications list etc.. */}
            <RightSidebarContainer />

            {/* Modal layout container */}
            <ModalLayoutContainer />
        </>
    )
}

export default LayoutContainer
