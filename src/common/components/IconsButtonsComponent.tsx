import React from 'react'
// import PencilIcon from '@heroicons/react/24/outline/PencilIcon'
import PencilIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PrinterIcon from '@heroicons/react/24/outline/PrinterIcon'
import LockOpenIcon from '@heroicons/react/24/outline/LockOpenIcon'
import ViewFinderCircleIcon from '@heroicons/react/24/outline/ViewfinderCircleIcon'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'
import SwitchButtonComponent from './SwitchButtonComponent'

interface ITableButtonsComponent {
    item?: any
    onEdit?: (item: any) => void
    onDelete?: (item: any) => void
    onPrint?: (item: any) => void
    onLock?: (item: any) => void
    onView?: (item: any) => void
    switch?: {
        defaultValue?: boolean
        onSwitch?: (value: boolean, item: any) => void
    }
}

export const TableButtonsComponent: React.FC<ITableButtonsComponent> = ({
    item,
    onEdit,
    onDelete,
    onPrint,
    onLock,
    onView,
    switch: { defaultValue, onSwitch } = {},
}) => {
    return (
        <>
            {onEdit && (
                <button className='btn btn-square btn-ghost' onClick={() => { onEdit(item) }}>
                    <PencilIcon className='w-5 h-5' />
                </button>
            )}

            {onDelete && (
                <button className='btn btn-square btn-ghost' onClick={() => { onDelete(item) }}>
                    <TrashIcon className='w-5 h-5' />
                </button>
            )}

            {onPrint && (
                <button className='btn btn-square btn-ghost' onClick={() => { onPrint(item) }}>
                    <PrinterIcon className='w-5 h-5' />
                </button>
            )}

            {onLock && (
                <button className='btn btn-square btn-ghost' onClick={() => { onLock(item) }}>
                    <LockOpenIcon className='w-5 h-5' />
                </button>
            )}

            {
                onSwitch && (
                    <SwitchButtonComponent
                        defaultValue={defaultValue}
                        onSwitch={(value) => { onSwitch(value, item) }}
                    />
                )
            }

            {onView && (
                <button className='btn btn-square btn-ghost' onClick={() => { onView(item) }}>
                    <EyeIcon className='w-5 h-5' />
                    <ViewFinderCircleIcon className='w-5 h-5' />
                </button>
            )}
        </>
    )
}