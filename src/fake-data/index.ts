import { Context } from '../types';
import { Base } from '../base';
import { IFakeDataQuery, ITokenStatus } from './types';

const resourceName = 'fake-data';

export class FakeData extends Base {

  /**
    * Generate fake data on the specified params.
    * 
    * @example
    *
    * const query = {
    *   language: Language.en,
    *   topic: 'user', 
    *   schema: {
    *     id: 'objectId',
    *     name: {
    *       first: 'string',
    *       last: 'string',
    *     },
    *     address: 'string',
    *     birth: 'date',
    *     city: 'string',
    *     age: 'number: {min: 18, max: 60}',
    *     username: 'string',
    *     email: 'string',
    *     image: 'string',
    *   }
    * }
    * 
    * const fakeData = await client.fakeData.generate(query)
    * 
    * @param {IFakeDataQuery} query 
    * @param {string} query.topic The topic of fake data
    * @param {Record<string, any>} query.schema The schema of fake data. It defines the structure and content.
    * @param {Language} query.language The language of fake data. Fake data are translated into six languages: english, french, italian, spanish and german.
    * @param {Context} query.context The business context of fake data.
    * @param {number} query.limit The number of records to generate. If not specified the default value is 20.
    * @returns {Promise<{data: Record<string, any>[], tokenStatus: ITokenStatus}>} The promise resolves an object containing an array of false data and an object relating to the status of the requests.
    */
  async generate(query: IFakeDataQuery): Promise<{data: Record<string, any>[], tokenStatus: ITokenStatus}> {
    const {language, topic, schema, context, limit}= query
    const queryString = new URLSearchParams({
      topic,
      schema: JSON.stringify(schema),
      ...(context ? {context} : {context : Context.default}), 
      ...(limit ? {limit} : {limit : 20}), 
    } as any).toString();
    const {body, headers} = await this.request<Record<string, any>[]>(`/${resourceName}/${language}?${queryString}`);
    return { 
      data: body.data,
      tokenStatus: {
        tokensOverflow: parseInt(headers.get('x-tokens-overflow')),
        tokenLimit: parseInt(headers.get('x-token-limit')),
        tokenRemaining: parseInt(headers.get('x-token-remaining')),
        tokenResetDate: headers.get('x-token-reset'),
      }
    }
  }

    /**
    * Token status related to the generation of fake data.
    * 
    * const tokenStatus = await client.fakeData.tokenStatus()
    * 
    * @returns {Promise<ITokenStatus>} The promise resolves to an object.
    */
    async tokenStatus(): Promise<ITokenStatus> {
      const {body} = await this.request<ITokenStatus>(`/${resourceName}/token-status`);
      return body.data
    }

}