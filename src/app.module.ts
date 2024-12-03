import { Module } from '@nestjs/common';
import CommonModule from './common/common.module';
import ApplyModule from './apply/apply.module';

@Module({
	imports: [CommonModule, ApplyModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
