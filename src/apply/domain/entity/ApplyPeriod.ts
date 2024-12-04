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

	public init() {
		this.status = 'START';
		this.startDate = new Date();
	}

	public done(): void {
		this.status = 'DONE';
		this.endDate = new Date();
	}
}
