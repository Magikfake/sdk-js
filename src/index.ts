import { FakeData } from './fake-data';
import { Schema } from './schema';
import { IFakeDataQuery, ITokenStatus  } from "./fake-data/types";
import { ISchemaQuery, ISchemaParams, ISchema } from "./schema/types";
import { Language, Context, SchemaType } from "./types";
import { BadRequestError, TooManyRequestsError, InvalidAuthorization, PaymentRequired } from "./errors";

export class Client {
  fakeData: FakeData;
  schema: Schema;

  /**
    * Creates a new instance
    * @param {Object} config
    * @param {string} options.apiKey Your magikfake api key.
    */
  constructor(config: { apiKey: string}) {
    this.fakeData = new FakeData(config);
    this.schema = new Schema(config);
  }
}

export { Language, Context, SchemaType };
export { BadRequestError, TooManyRequestsError, InvalidAuthorization, PaymentRequired }
export { IFakeDataQuery, ITokenStatus };
export { ISchemaQuery, ISchemaParams, ISchema };