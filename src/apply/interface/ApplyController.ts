import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import ApplyFacade from '../application/ApplyFacade';

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
			data: period,
		});
	}
}

export default ApplyController;
