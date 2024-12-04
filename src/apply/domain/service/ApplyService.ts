import { ApplyPeriod } from '../entity/ApplyPeriod';

export interface ApplyService {
	getLatestApplyPeriod(): Promise<ApplyPeriod>;
	startApplyPeriod(): Promise<ApplyPeriod>;
}
