import { IsNumber } from "class-validator";

export class CreateLikeDto {
	@IsNumber()
	readonly productId: number;
}