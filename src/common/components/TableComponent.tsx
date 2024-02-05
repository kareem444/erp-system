import React, { ReactNode, useEffect, useState } from "react";
import { TableButtonsComponent } from "./IconsButtonsComponent";
import DraggableItemComponent from "./DraggableItemComponent";
import { useTranslate } from "../hooks/useTranslate";

function TrComponent({
    isArabic,
    children,
}: {
    isArabic: boolean;
    children?: ReactNode;
}) {
    return (
        <td
            className={
                "!z-0 capitalize" +
                " " +
                (isArabic
                    ? "first-of-type:rounded-tr-md first-of-type:rounded-tl-none last-of-type:rounded-tl-md last-of-type:rounded-tr-none"
                    : "")
            }
        >
            {children}
        </td>
    );
}

export interface ITableContent {
    header: string[];
    items: any[];
    selectors: any;
    avatarSelector?: any;
    nameSelector?: any;
    isDraggable?: boolean;
    maxStringLength?: number;
    onDrag?: (item: any) => void;
    buttons?: {
        onEdit?: (item: any) => void;
        onDelete?: (item: any) => void;
        onPrint?: (item: any) => void;
        onLock?: (item: any) => void;
        switch?: {
            defaultValue?: boolean;
            defaultValueSelector?: (item: any) => boolean;
            onSwitch?: (value: boolean, item: any) => void;
        };
    };
}

export const TableComponent: React.FC<ITableContent> = ({
    header,
    items,
    selectors,
    avatarSelector,
    nameSelector,
    buttons,
    isDraggable = false,
    onDrag,
    maxStringLength = 20,
}) => {
    const [dragResult, setDragResult] = useState<[any, any]>([null, null]);
    const { isArabic, translate } = useTranslate();

    useEffect(() => {
        if (
            isDraggable &&
            dragResult[1] != null &&
            dragResult[0] != null &&
            dragResult[0] !== dragResult[1]
        ) {
            onDrag && onDrag(dragResult);
        }
    }, [dragResult[0], dragResult[1]]);

    const handelButtons = (item: any) => {
        if (buttons) {
            if (buttons.switch) {
                if (buttons.switch.defaultValueSelector) {
                    buttons.switch.defaultValue =
                        buttons.switch.defaultValueSelector(item);
                }
            }
            return buttons;
        }
    };

    return (
        <div className="overflow-x-auto w-full no-scrollbar overflow-y-scroll h-full">
            <table className="table w-full">
                <thead>
                    <tr className={isArabic ? "text-right" : "text-left"}>
                        {isDraggable && <TrComponent isArabic={isArabic} />}
                        {header.map((h, k) => {
                            return (
                                <TrComponent key={k} isArabic={isArabic}>
                                    {translate(h)}
                                </TrComponent>
                            );
                        })}
                        {buttons && <TrComponent isArabic={isArabic} />}
                    </tr>
                </thead>
                <tbody>
                    {items.map((l, k) => {
                        return (
                            <DraggableItemComponent
                                key={k}
                                ContainerWrapper={"tr"}
                                DragButtonWrapper={"td"}
                                item={k}
                                isDraggable={isDraggable}
                                setDragResult={setDragResult}
                            >
                                {(avatarSelector || nameSelector) && (
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {avatarSelector && (
                                                <div className="avatar">
                                                    <div className="mask mask-circle w-12 h-12">
                                                        <img src={avatarSelector(l)} alt="Avatar" />
                                                    </div>
                                                </div>
                                            )}
                                            {nameSelector && (
                                                <div>
                                                    <div className="font-bold">{nameSelector(l)}</div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                )}
                                {Object.keys(selectors).map((key, index) => {
                                    let value = selectors[key](l);
                                    if (value && value.length > maxStringLength) {
                                        value = value.substring(0, maxStringLength) + "...";
                                    }
                                    return (
                                        <td
                                            className={isArabic ? "text-right" : "text-left"}
                                            key={index}
                                        >
                                            {value !== "" ? value : "__"}
                                        </td>
                                    );
                                })}
                                {buttons && (
                                    <td>
                                        <div className="flex justify-end">
                                            <TableButtonsComponent {...handelButtons(l)} item={l} />
                                        </div>
                                    </td>
                                )}
                            </DraggableItemComponent>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
