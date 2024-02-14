import { Ref, forwardRef } from "react";
import logo from "../../../common/assets/images/logo.png";

interface AdminReportContainerProps {
    children: React.ReactNode;
}

const AdminReportContainer = forwardRef((props: AdminReportContainerProps, ref: Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className="flex p-10 flex-col text-black h-screen bg-white" >
            <div className="flex-1">
                <header className="flex justify-around">
                    <section className="text-left flex flex-col justify-center">
                        <p>Al Royaa Al Rakamya</p>
                        <p>For Information Technology</p>
                        <p>VAT :302252074700003</p>
                        <p>C.T :4030493912</p>
                    </section>
                    <section className="w-32">
                        <img src={logo} alt="logo" />
                    </section>
                    <section className="text-right flex flex-col justify-center">
                        <p>مؤسسة الرؤيا الرقمية</p>
                        <p>لتقنية المعلومات</p>
                        <p>الرقم الضريبى : 3022520747000</p>
                        <p>السجل التجارى: 4030493912 </p>
                    </section>
                </header>
                <hr className="my-4" />
                {props.children}
            </div>
            <footer>
                <hr />
                <p className="text-right mt-2">
                    جدة ش خالد بن الواليد مركز التقنية مكتب رقم 4
                </p>
            </footer>
        </div>
    );
});

export default AdminReportContainer;
