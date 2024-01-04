import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddBranchFeatureFormStructure } from '../structures/AdminAddBranchStructure'

export default function AddBranchFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <CollapseComponent title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}>
            <FormComponent {...AdminAddBranchFeatureFormStructure()}/>
        </CollapseComponent>
    )
}
