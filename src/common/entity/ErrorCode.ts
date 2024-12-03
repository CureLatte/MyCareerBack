class ErrorCodeVo {
	readonly status: number;
	readonly message: string;

	constructor(status: number, message: string) {
		this.status = status;
		this.message = message;
	}
}

export type ErrorCode = ErrorCodeVo;

export const NOT_FOUND = new ErrorCodeVo(400, '존재하지 않습니다.');
