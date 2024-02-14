import { ReactNode, Ref, forwardRef } from "react";
import AdminReportContainer from "src/app/admin/containers/AdminReportContainer";
import { useTranslate } from "src/common/hooks/useTranslate";

function TdComponent({
    children,
    className,
}: {
    children?: ReactNode;
    className?: string;
}) {
    return (
        <td className={"normal-case text-center border" + " " + className}>
            {children}
        </td>
    );
}

interface AdminTableReportComponentProps {
    children?: ReactNode;
    data?: any;
    selectors?: any;
    headers?: string[];
}

const AdminTableReportComponent = forwardRef(
    (
        { children, data, selectors, headers }: AdminTableReportComponentProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const { translate } = useTranslate();

        return (
            <AdminReportContainer ref={ref}>
                {children}
                {!!data && data.length > 0 && (
                    <div className="overflow-x-auto mt-5">
                        <table className="border-collapse w-full text-left bg-white normal-case">
                            <thead>
                                <tr>
                                    {headers?.map((key: string, index) => (
                                        <TdComponent key={index}>
                                            {translate(key)}
                                        </TdComponent>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item: any, index: any) => (
                                    <tr key={index}>
                                        {Object.keys(selectors).map((key, index) => {
                                            let value = selectors[key](item);
                                            return (
                                                <TdComponent key={index}>
                                                    {value !== "" ? value : "__"}
                                                </TdComponent>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </AdminReportContainer>
        );
    }
);

export default AdminTableReportComponent;
