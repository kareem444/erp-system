import { FC } from 'react'
import { useTranslate } from '../../common/hooks/useTranslate'
import { TRANSLATE } from '../../common/constants/translateConstants'
import './CollapseTitle.css'

interface CollapseComponentProps {
    children: React.ReactNode
    title: string
    className?: string
}

const CollapseComponent: FC<CollapseComponentProps> = ({
    children,
    title,
    className
}) => {
    const { translate, isArabic } = useTranslate()
    return (
        <div
            className={
                isArabic?  'collapse collapse-plus-ar px-2 card w-full bg-base-100 shadow-sm' 
                + ' ' + className : 
                'collapse collapse-plus px-2 card w-full bg-base-100 shadow-sm '
                 + ' ' + className
            }
        >
            <input type='checkbox' />
            <div className='collapse-title text-2xl font-medium px-4'>
                <h3 className='text-lg'>{title}</h3>
            </div>
            <div className='collapse-content overflow-y-scroll no-scrollbar'>{children}</div>
        </div>
    )
}

export default CollapseComponent
