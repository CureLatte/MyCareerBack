import { Module } from '@nestjs/common';
import ApplyController from './interface/ApplyController';
import { ApplyServiceImpl } from './domain/service/ApplyServiceImpl';
import { ApplyLocalRepository } from './infrastructure/repository/ApplyLocalRepository';
import ApplyFacade from './application/ApplyFacade';
@Module({
	controllers: [ApplyController],
	providers: [
		{
			provide: 'ApplyService',
			useClass: ApplyServiceImpl,
		},
		ApplyFacade,
		{
			provide: 'ApplyRepository',
			useClass: ApplyLocalRepository,
		},
	],

	imports: [],
	exports: [],
})
export default class ApplyModule {}
