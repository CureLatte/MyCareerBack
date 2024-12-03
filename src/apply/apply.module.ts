import { Module } from '@nestjs/common';
import ApplyController from './interface/ApplyController';
import { ApplyServiceImpl } from './domain/service/ApplyServiceImpl';
import { ApplyRepositoryImpl } from './infrastructure/repository/ApplyRepositoryImpl';
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
			useClass: ApplyRepositoryImpl,
		},
	],

	imports: [],
	exports: [],
})
export default class ApplyModule {}
