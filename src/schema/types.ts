import { Context, SchemaType } from "../types";

export interface ISchemaQuery {
    topic?: string; 
    type?: SchemaType, 
    context?: Context, 
    page?: number;
    limit?: number;
}

export interface ISchemaParams {
	context?: Context;
    topic: string;
	schema: Record<string, unknown>;
}

export interface ISchema {
    id: string;
    userId?: string;
	context?: Context;
    topic: string;
	schema: Record<string, unknown>;
}