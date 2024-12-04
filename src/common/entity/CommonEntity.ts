export default class CommonEntity {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;

	constructor(data: any) {
		this.id = data.id;
		this.createdAt = data.createdAt;
		this.updatedAt = data.updatedAt;
		this.deletedAt = data.deletedAt;
	}
}
