import { Base } from '../base';
import { ISchema, ISchemaParams, ISchemaQuery } from './types';

const resourceName = 'schema';

export class Schema extends Base {

   /**
    * Find schemas on the specified params.
    * 
    * @example
    *
    * const query = {
    *   topic: 'user',
    *   type: SchemaType.personal,
    *   context: Context.pizzeria 
    * }
    * 
    * const schemas = await client.schema.find(query)
    * 
    * @param {ISchemaQuery} query 
    * @param {string} query.topic The topic of schema
    * @param {SchemaType} query.type The type of schema. Schemes are categorized into personal and common. The personal ones are visible only to the creator user while the common ones are visible to everyone.
    * @param {Context} query.context The business context of schema
    * @param {number} query.page The page indicates the page number, the page being the one requested.
    * @param {number} query.limit The limit indicates the number of items to be returned. If not specified return all items.
    * @returns {Promise<data: ISchema[], count: number>} The promise resolves to an array of schema and and the total schema found.
    */
  async find(query: ISchemaQuery): Promise<{data: ISchema[], count: number}> {
    const queryString = new URLSearchParams(query as Record<string, string>).toString();
    const {body} = await this.request<ISchema[]>(`/${resourceName}?${queryString}`);
    return {data: body.data, count: body.count}
  }

   /**
    * Find schema by id.
    * 
    * @param {string} id The id of schema
    * @returns {Promise<ISchema>} The promise resolves to an schema.
    */
  async findOneById(id: string): Promise<ISchema> {
    const {body} = await this.request<ISchema>(`/${resourceName}/${id}`);
    return body.data
  }

   /**
    * Save schema
    * 
    * @param {ISchemaParams} params
    * @param {string} params.topic The topic of schema
    * @param {Context} params.context The context of schema
    * @param {Record<string, any>} params.schema The schema of fake data. It defines the structure and content.
    * @returns {Promise<ISchema>} The promise resolves to an schema.
    */
  async save(params: ISchemaParams): Promise<ISchema> {
    const {topic, schema, context} = params
    const {body} = await this.request<ISchema>(`/${resourceName}`, {
      method: 'POST',
      body: JSON.stringify({topic, schema, context}),
    });
    return body.data
  }

   /**
    * Update schema
    * 
    * @param {string} id The id of schema
    * @param {ISchemaParams} params
    * @param {string} params.topic The topic of schema
    * @param {Context} params.context The context of schema
    * @param {Record<string, any>} params.schema The schema of fake data. It defines the structure and content.
    * @returns {Promise<ISchema>} The promise resolves to an schema.
    */
  async update(id: string, params: ISchemaParams): Promise<ISchema> {
    const {topic, schema, context} = params
    const {body} = await this.request<ISchema>(`/${resourceName}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({topic, schema, context}),
    });
    return body.data
  }

   /**
    * Delete schema by id.
    * 
    * @param {string} id The id of schema
    * @returns {Promise<Boolean>} The promise resolves to a boolean.
    */
  async delete(id: string): Promise<Boolean> {
    const {body: result} = await this.request<Boolean>(`/${resourceName}/${id}`, {
      method: 'DELETE'
    });
    return result.data
  }
}