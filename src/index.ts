import { FakeData } from './fake-data';
import { Schema } from './schema';

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