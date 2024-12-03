import CommonEntity from '../../../common/entity/CommonEntity';

export default class Platform extends CommonEntity {
	name: string;

	constructor(data: any) {
		super(data);
		this.name = data.name;
	}
}
