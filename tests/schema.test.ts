import * as MagikFake from '../src';
import { ISchema } from '../src/schema/types';

describe('Schema', function() {
    let client: MagikFake.Client;
    let schemaSaved: ISchema

    beforeAll(async () => {
        client = new MagikFake.Client({apiKey: ''});

        const schemaToSave = {
            id: 'objectId',
            name: {
                first: 'string',
                last: 'string',
            },
            address: 'string',
            birth: 'date',
            city: 'string',
            age: {
                type: 'number',
                min: 18, 
                max: 60
            },
            username: 'string',
            email: 'string',
            image: 'string',
        }
        schemaSaved = await client.schema.save({topic: 'user', schema: schemaToSave})
    })

    describe('find', function() {

        it('should return all schema for user topic', async () => {
            const query = {
                topic: 'user'
            }
           const {count} = await client.schema.find(query)
          
           expect(count).toBe(9);
        });

        it('should return max three schema', async () => {
            const {data} = await client.schema.find({page: 1, limit: 3})
           
            expect(data.length).toBe(3);
        });

        it('should return all schema with page=1', async () => {
            const {data} = await client.schema.find({page: 1})
           
            expect(data.length).toBe(162);
        });
    })

    describe('findOneById', function() {
        it('should return specified schema', async () => {
            const schema = await client.schema.findOneById(schemaSaved.id)
           
            expect(schema).toBeDefined()
        });
    })

    describe('save', function() {
        it('should save the schema', async () => {
            const schemaToSave = {
                id: 'objectId',
                name: {
                    first: 'string',
                    last: 'string',
                },
                address: 'string',
                birth: 'date',
                city: 'string',
                age: {
                    type: 'number',
                    min: 18, 
                    max: 60
                },
                username: 'string',
                email: 'string',
                image: 'string',
            }

            const response = await client.schema.save({topic: 'user', schema: schemaToSave})

            expect(response.schema).toBeDefined()

            await client.schema.delete(response.id)
        });
    })

    describe('update', function() {
        it('should update the schema', async () => {
            const schemaToUpdate = {
                id: 'objectId',
                firstName: 'string',
                lastName: 'string',
                address: 'string',
                birth: 'date',
                city: 'string',
                age: {
                    type: 'number',
                    min: 18, 
                    max: 60
                },
                username: 'string',
                email: 'string',
                image: 'string',
            }

            const response = await client.schema.update(schemaSaved.id, {
                topic: 'user', schema: schemaToUpdate})

            expect(response.schema.firstName).toBe('string');
            expect(response.schema.lastName).toBe('string');
        });
    })

    describe('delete', function() {
        it('should return specified schema', async () => {
            const response = await client.schema.delete(schemaSaved.id)
           
            expect(response).toBe(true)
        });
    })


})