import { Fragment, Ref, forwardRef } from "react";
import logo from '../assets/images/logo.png';
import Styles from './invoice.module.css';

const Invoice = forwardRef((props, ref: Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className={Styles.body}>
          <div className={Styles.container}>
            <header className={Styles.header}>
              <section>
                <p>Al Royaa Al Rakamya</p>
                <p>For Information Technology</p>
                <p>VAT :302252074700003</p>
                <p>C.T :4030493912</p>
              </section>
              <section className={Styles.img}><img src={logo} alt='logo'/></section>
              <section>            
                <p>مؤسسة الرؤيا الرقمية</p>
                <p>لتقنية المعلومات</p>
                <p>الرقم الضريبى : 3022520747000</p>
                <p>السجل التجارى: 4030493912 </p></section>
            </header>
            <hr className={Styles.spacer}/>
            <div>
              <p className={Styles.title}>كشف حساب عميل تفصيلى</p>
            </div>
            <div className={Styles.clientInfo}>
              <p>العميل : محمود</p>
              <p>2024-02-11 : 2023-01- من : 01</p>
            </div>
            <div className={Styles.tableResponsive}>
                <table>
                  <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                        <th>Header 5</th>
                        <th>Header 6</th>
                        <th>Header 7</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>Data 6</td>
                      <td>Data 7</td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <footer className={Styles.footer}>
            <hr/>
            <p className={Styles.footerText}>جدة ش خالد بن الواليد مركز التقنية مكتب رقم 4</p>
          </footer>
        </div>
    );
  });
export default Invoice;