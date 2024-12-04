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
		this.status = ApplyPeriodStatus.INIT;
		this.startDate = new Date();
	}

	public done(): void {
		this.status = ApplyPeriodStatus.DONE;
		this.endDate = new Date();
	}

	public on() {
		this.status = ApplyPeriodStatus.ON;
	}

	public off(): void {
		this.status = ApplyPeriodStatus.OFF;
	}
}

export const ApplyPeriodStatus = {
	INIT: 'INIT',
	ON: 'ON',
	OFF: 'OFF',
	DONE: 'DONE',
};
