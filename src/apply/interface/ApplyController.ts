import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import ApplyFacade from '../application/ApplyFacade';
import { ApplyPeriodInfoDto } from './dto/ApplyPeriodInfoDto';

@Controller('/apply')
class ApplyController {
	constructor(private ApplyFacade: ApplyFacade) {}

	@Get('/period')
	public async getApplyPeriod(
		@Req() req: Request,
		@Res() res: Response,
	): Promise<Response> {
		const period = await this.ApplyFacade.getLatestApplyPeriod();
		return res.status(200).json({
			ok: true,
			data: new ApplyPeriodInfoDto(period),
		});
	}

	@Get('/period/start')
	public async startPeriod(
		@Req() req: Request,
		@Res() res: Response,
	): Promise<Response> {
		const period = await this.ApplyFacade.startApplyPeriod();

		return res.status(200).json({
			ok: true,
			data: new ApplyPeriodInfoDto(period),
		});
	}
}

export default ApplyController;
