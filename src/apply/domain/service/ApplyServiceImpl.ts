import { Inject, Injectable } from '@nestjs/common';
import { ApplyRepository } from '../repository/ApplyRepository';
import { ApplyService } from './ApplyService';
import { ApplyPeriod } from '../entity/ApplyPeriod';

@Injectable()
export class ApplyServiceImpl implements ApplyService {
	applyRepository: ApplyRepository;

	constructor(@Inject('ApplyRepository') applyRepository: ApplyRepository) {
		this.applyRepository = applyRepository;
	}

	async getLatestApplyPeriod(): Promise<ApplyPeriod> {
		return new ApplyPeriod({
			id: 1,
			status: 'START',
			startDate: new Date(),
			endDate: new Date(),

			createdAt: new Date(),
			updatedAt: new Date(),
			deletedAt: new Date(),
		});
	}
}
