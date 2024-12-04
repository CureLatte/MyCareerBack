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
		return this.applyRepository.findLatestPeriod();
	}
}
