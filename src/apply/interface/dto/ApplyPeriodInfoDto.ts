export class ApplyPeriodInfoDto {
	startDate: string;
	endDate: string;
	status: string;

	constructor(data: any) {
		this.startDate = data.startDate;
		this.endDate = data.endDate;
		this.status = data.status;
	}
}
