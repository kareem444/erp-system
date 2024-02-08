import { IAdminDetailsStatusContainerProps } from 'src/app/admin/containers/AdminDetailsStatusContainer';
import AdminModalActionsStructure from 'src/app/admin/structure/modal/AdminModalActionsStructure';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import useFetch from 'src/common/DataHandler/hooks/server/useFetch';
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { AdminUnitsRepo } from '../repo/AdminUnitRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { ITableContent } from 'src/common/components/TableComponent';
import { IAdminUnitModel } from 'src/app/admin/models/AdminUnitModel';
import { UnitTableHeaderConstants } from '../constants/AdminUnitTableConstants';

export const AdminGetUnitStructure = (): IAdminDetailsStatusContainerProps => {
  const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
  const { setState } = useEchoState(EchoStateConstants.selectedItem);

  const { data, isLoading, isError, query } = useFetch<IAdminUnitModel[]>({
    key: AsyncStateConstants.units,
    queryFn: () => AdminUnitsRepo.getUnits(),
    options: {
      isExecuteOnInitIfNoData: true,
      echoState: 'all',
      onError: (e) => showNotification(e?.message ?? '', 'error'),
    },
  });

  const tableContent: ITableContent = {
    header: UnitTableHeaderConstants,
    items: data || [],
    selectors: {},
    nameSelector: (item: IAdminUnitModel) => item.unitname,
    buttons: {
      onEdit: (item: IAdminUnitModel) => {
        setState(item);
        openEditModal('adminEditUnitModal');
      },
      onDelete: (item: IAdminUnitModel) => {
        setState(item);
        openDeleteModal('adminDeleteUnitModal', 'onDeleteUnitModalDelete');
      },
    },
  };

  return {
    isData: !!data && data.length > 0,
    isLoading,
    isError,
    tableContent,
    onRefresh: query,
  };
};
