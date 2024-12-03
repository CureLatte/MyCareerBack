import { Inject, Injectable } from '@nestjs/common';
import { ApplyService } from '../domain/service/ApplyService';
import { ApplyPeriod } from '../domain/entity/ApplyPeriod';

@Injectable()
class ApplyFacade {
	applyService: ApplyService;
	constructor(@Inject('ApplyService') applyService: ApplyService) {
		this.applyService = applyService;
	}

	async getLatestApplyPeriod(): Promise<ApplyPeriod> {
		return await this.applyService.getLatestApplyPeriod();
	}
}

export default ApplyFacade;
