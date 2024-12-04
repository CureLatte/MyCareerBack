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

	async startApplyPeriod(): Promise<ApplyPeriod> {
		const currentPeriod = await this.applyRepository.findLatestPeriod();
		if (currentPeriod) {
			currentPeriod.done();
			await this.applyRepository.save(currentPeriod);
		}

		const newPeriod = new ApplyPeriod({});
		newPeriod.init();

		return await this.applyRepository.save(newPeriod);
	}

	async getLatestApplyPeriod(): Promise<ApplyPeriod> {
		return this.applyRepository.findLatestPeriod();
	}
}
