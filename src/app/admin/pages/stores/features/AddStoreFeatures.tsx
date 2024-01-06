import CollapseComponent from '../../../../../common/components/CollapseComponent';
import { TRANSLATE } from '../../../../../common/constants/translateConstants';
import usePageTitle from '../../../../../common/hooks/usePageTitle';
import { useTranslate } from '../../../../../common/hooks/useTranslate';
import FormComponent from 'src/common/components/FormComponent';
import { AdminAddStoreForm } from '../structures/AdminAddStoreStructure';

export default function AddStoreFeature() {
    const { titleWithoutLetterS } = usePageTitle();
    const { translate } = useTranslate();

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}>
            <FormComponent {...AdminAddStoreForm()} />
        </CollapseComponent>
    );
}
