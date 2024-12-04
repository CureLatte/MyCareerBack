import { TestBed, Mocked } from '@suites/unit';
import { ApplyService } from '../../../src/apply/domain/service/ApplyService';
import { ApplyRepository } from '../../../src/apply/domain/repository/ApplyRepository';
import { ApplyServiceImpl } from '../../../src/apply/domain/service/ApplyServiceImpl';
import {
	ApplyPeriod,
	ApplyPeriodStatus,
} from '../../../src/apply/domain/entity/ApplyPeriod';

describe('TestGetLatestApplyPeriod', () => {
	let applyService: ApplyService;
	let applyRepository: Mocked<ApplyRepository>;

	beforeAll(async () => {
		// Isolate CatsHttpService and mock HttpClient and Logger
		const { unit, unitRef } =
			await TestBed.solitary(ApplyServiceImpl).compile();
		applyService = unit;
		applyRepository = unitRef.get('ApplyRepository');
	});

	test('조회 ', async () => {
		// GIVEN
		applyRepository.save = jest.fn(async (value) => {
			return value;
		});

		// WHEN
		const period = await applyService.startApplyPeriod();

		// THEN
		expect(ApplyPeriodStatus.INIT).toBe(period.status);
	});
});
