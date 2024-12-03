import CommonEntity from '../../../common/entity/CommonEntity';

export class ApplyPeriod extends CommonEntity {
	status: string;
	startDate: Date;
	endDate: Date;

	constructor(data: any) {
		super(data);
		this.id = data.id;
		this.status = data.status;
	}
}
