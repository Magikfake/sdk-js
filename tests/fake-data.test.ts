import * as MagikFake from '../src';
import { BadRequestError, TooManyRequestsError } from '../src/errors';
import { Context, Language } from '../src/types';

describe('FakeData', function() {
    let client: MagikFake.Client;

    beforeAll(() => {
        client = new MagikFake.Client({apiKey: ''});
    })

    describe('generate', function() {
        it('should return an array of fake data with 20 items for user topic', async () => {
            const query = {
                language: Language.en,
                topic: 'user', 
                schema: {
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
            }
           const {data, tokenStatus} = await client.fakeData.generate(query)
          
           expect(data.length).toBe(20);
           expect(data[0].id).toBeDefined();
           expect(typeof data[0].id).toBe("string");
           expect(data[0].name.first).toBeDefined();
           expect(typeof data[0].name.first).toBe("string");
           expect(data[0].name.last).toBeDefined();
           expect(typeof data[0].name.last).toBe("string");
           expect(data[0].address).toBeDefined();
           expect(typeof data[0].address).toBe("string");
           expect(data[0].birth).toBeDefined();
           expect(new Date(data[0].birth as string)).toBeInstanceOf(Date);
           expect(data[0].city).toBeDefined();
           expect(typeof data[0].city).toBe("string");
           expect(data[0].age).toBeDefined();
           expect(typeof data[0].age).toBe("number");
           expect(data[0].username).toBeDefined();
           expect(typeof data[0].username).toBe("string");
           expect(data[0].email).toBeDefined();
           expect(typeof data[0].email).toBe("string");

           expect(tokenStatus.tokenLimit).toBeDefined();
           expect(tokenStatus.tokenResetDate).toBeDefined();
           expect(tokenStatus.tokenRemaining).toBeDefined();
           expect(tokenStatus.tokensOverflow).toBeDefined();

           const patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           expect(patternEmail.test(data[0].email as string)).toBe(true);

          const patternUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
           expect(patternUrl.test(data[0].image as string)).toBe(true);
        });

        it('should return an array of fake data with 99 items for book topic', async () => {
            const query = {
                language: Language.en,
                topic: 'book', 
                context: Context.library,
                limit: 99,
                schema: {
                    title: 'string',
                    author: 'string',
                    description: 'string',
                    comments: [{ body: 'string', date: 'date' }],
                    date: 'date',
                    meta: {
                        votes: 'number',
                        favs: 'number'
                    }
                }
            }
            const {data} = await client.fakeData.generate(query)

            expect(data.length).toBe(99);
            expect(data[0].title).toBeDefined();
            expect(typeof data[0].title).toBe("string");
            expect(data[0].author).toBeDefined();
            expect(typeof data[0].author).toBe("string");
            expect(data[0].description).toBeDefined();
            expect(typeof data[0].description).toBe("string");
            expect(data[0].comments).toBeDefined();
            expect(data[0].comments.length).toBe(10);
            expect(data[0].comments[0].body).toBeDefined();
            expect(typeof data[0].comments[0].body).toBe("string");
            expect(data[0].comments[0].date).toBeDefined();
            expect(new Date(data[0].comments[0].date)).toBeInstanceOf(Date);
            expect(data[0].date).toBeDefined();
            expect(new Date(data[0].date)).toBeInstanceOf(Date);
            expect(data[0].meta).toBeDefined();
            expect(data[0].meta.votes).toBeDefined();
            expect(typeof data[0].meta.votes).toBe("number");
            expect(data[0].meta.favs).toBeDefined();
            expect(typeof data[0].meta.favs).toBe("number");
        })

        it('should return an exception because the limit is greater than 100', async () => {
            const query = {
                language: Language.en,
                topic: 'book', 
                context: Context.library,
                limit: 150,
                schema: {
                    title: 'string',
                    author: 'string',
                    description: 'string',
                    comments: [{ body: 'string', date: 'date' }],
                    date: 'date',
                    meta: {
                        votes: 'number',
                        favs: 'number'
                    }
                }
            }
            try {
                await client.fakeData.generate(query)
            } catch (error) {
                expect((error as BadRequestError).message).toBe("Invalid request check error messages");
                expect((error as BadRequestError).errors[0]).toBe("the number of records exceeds the limit set by the subscribed plan.");
            }
        })

        it('should return an exception because the schema is empty', async () => {
            const query = {
                language: Language.en,
                topic: 'book', 
                context: Context.library,
                schema: {}
            }
            try {
                await client.fakeData.generate(query)
            } catch (error) {
                expect((error as BadRequestError).message).toBe("Invalid request check error messages");
                expect((error as BadRequestError).errors[0]).toBe("schema: The property cannot be an empty object");
            }
        })

        it('should return an exception because the comments is malformed', async () => {
            const query = {
                language: Language.en,
                topic: 'book', 
                context: Context.library,
                schema: {
                    title: 'string',
                    author: 'string',
                    description: 'string',
                    comments: [{ body: 'string', date: 'date' }, { body: 'string', date: 'date'}],
                    date: 'date',
                    meta: {
                        votes: 'number',
                        favs: 'number'
                    }
                }
            }
            try {
                await client.fakeData.generate(query)
            } catch (error) {
                expect((error as BadRequestError).message).toBe("Invalid request check error messages");
                expect((error as BadRequestError).errors[0]).toBe("schema: The array can consist of only one element. JsonPath: comments");
            }
        })

        it('should return an exception because the requests are exceeded', async () => {
            const query = {
                language: Language.en,
                topic: 'book', 
                context: Context.library,
                schema: {
                    title: 'string',
                    author: 'string',
                    description: 'string',
                    comments: [{ body: 'string', date: 'date' }],
                    date: 'date',
                    meta: {
                        votes: 'number',
                        favs: 'number'
                    }
                }
            }
            try {
                for (let i=0; i<10; i++) {
                    await client.fakeData.generate(query)
                }
            } catch (error) {
                expect((error as TooManyRequestsError).message).toContain("Invalid request check error messages");
            }
        })
    });

    describe('tokenStatus', function() {
        it('should return an object of token status', async () => {
            const tokenStatusData = await client.fakeData.tokenStatus()
            expect(tokenStatusData.tokenLimit).toBeDefined();
            expect(tokenStatusData.tokenResetDate).toBeDefined();
            expect(tokenStatusData.tokenRemaining).toBeDefined();
            expect(tokenStatusData.tokensOverflow).toBeDefined();
        })
    })
})