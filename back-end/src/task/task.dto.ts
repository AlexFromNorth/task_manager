import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'
import { Priority } from 'prisma/generated/client'

export class TaskDto {
	@IsString()
	@IsOptional()
	name: string

	@IsBoolean()
	@IsOptional()
	isCompleted?: boolean

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsString()
	@IsOptional()
	description?: string

	@IsEnum(Priority)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	priority?: Priority


}
