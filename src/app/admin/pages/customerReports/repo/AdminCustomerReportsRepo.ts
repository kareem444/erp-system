import { IReportSearchParams } from "src/app/admin/components/AdminReportsPickersComponent";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const customerReports = EndPointsConstants.CustomerReports;

export class AdminCustomerReportsRepo {
    static getCustomerReports = async (
        searchResult: IReportSearchParams<IAdminCustomerModel>
    ) =>
        await AxiosHelper.get(
            customerReports +
            `?customerid=${searchResult.item?.id}` +
            `&daterange1=${searchResult.startDate}` +
            `&daterange2=${searchResult.endDate}`
        );
}
