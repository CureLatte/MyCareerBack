import { ApplyPeriod } from 'src/apply/domain/entity/ApplyPeriod';
import { ApplyRepository } from '../../domain/repository/ApplyRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplyLocalRepository implements ApplyRepository {
	dataBase: {};

	constructor() {}

	async findLatestPeriod(): Promise<ApplyPeriod> {
		const tempDataBase = { ...this.dataBase };

		const valueList: ApplyPeriod[] = Object.values(tempDataBase);
		if (valueList.length <= 0) {
			return null;
		}

		valueList.sort((a, b) => (a.startDate > b.startDate ? 1 : -1));

		return valueList[0];
	}

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
	}
}
