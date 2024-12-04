import { ApplyPeriod } from '../entity/ApplyPeriod';

export interface ApplyRepository {
	findById(id: number): Promise<ApplyPeriod>;
	save(applyPeriod: ApplyPeriod): Promise<ApplyPeriod>;
	deleteAll(): Promise<void>;
}
