import { Context, Language } from "../types";

export interface IFakeDataQuery {
    topic: string; 
    schema: Record<string, any>,
    language: Language,
    context?: Context, 
    limit?: number;
}

export interface ITokenStatus {
    tokensOverflow: number,
    tokenLimit: number,
    tokenRemaining: number,
    tokenResetDate: string
}