import { IAdminUnitModel } from 'src/app/admin/models/AdminUnitModel';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { AdminUnitsRepo } from '../repo/AdminUnitRepo';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const OnDeleteUnitModalDeleteEvent = (): {
  click: () => void;
} => {
  const { state: selectedUnit } = useEchoState<IAdminUnitModel>(EchoStateConstants.selectedItem);
  const { deleteOperation } = useCrudHandler<IAdminUnitModel>('units');

  const { mutate } = useMutate({
    queryFn: () => AdminUnitsRepo.deleteUnit(selectedUnit.id!),
    options: {
      onSuccess() {
        deleteOperation(selectedUnit);
        showNotification('Unit deleted successfully');
      },
      onError() {
        showNotification('Something went wrong', 'error');
      },
    },
  });

  return {
    click: () => mutate(),
  };
};
