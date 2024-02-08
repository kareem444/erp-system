import { IUnitModel } from 'src/app/admin/models/UnitModel';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { AdminUnitsRepo } from '../repo/UnitRepo';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const OnDeleteUnitModalDeleteEvent = (): {
  click: () => void;
} => {
  const { state: selectedCustomer } = useEchoState<IUnitModel>(EchoStateConstants.selectedItem);
  const { deleteOperation } = useCrudHandler<IUnitModel>('units');

  const { mutate } = useMutate({
    queryFn: () => AdminUnitsRepo.deleteUnit(selectedCustomer.id!),
    options: {
      onSuccess() {
        deleteOperation(selectedCustomer);
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
