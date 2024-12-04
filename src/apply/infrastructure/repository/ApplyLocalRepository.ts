import { ApplyPeriod } from 'src/apply/domain/entity/ApplyPeriod';
import { ApplyRepository } from '../../domain/repository/ApplyRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplyLocalRepository implements ApplyRepository {
	dataBase: {};

	constructor() {}

	async findById(id: number): Promise<ApplyPeriod> {
		return this.dataBase[id];
	}
	async save(applyPeriod: ApplyPeriod): Promise<ApplyPeriod> {
		if (applyPeriod.id) {
			this.dataBase[applyPeriod.id] = applyPeriod;
		} else {
			const allCnt = Object.values(this.dataBase).length;
			applyPeriod.id = allCnt + 1;

			this.dataBase[applyPeriod.id] = applyPeriod;
		}

		return applyPeriod;
	}
	async deleteAll(): Promise<void> {
		this.dataBase = {};
		throw new Error('Method not implemented.');
	}
}
