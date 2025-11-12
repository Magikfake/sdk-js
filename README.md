
<div align="center">
  <img src="./assets/images/logo.svg" width="200"/>

  <p>
Generate realistic data through AI and the large amount of data stored in our system. The magikfake AI engine is in continuous learning to generate safe data to be used for a specific project</p>
  
  [![npm version](https://badgen.net/npm/v/magikfake)](https://www.npmjs.com/package/magikfake)
  [![npm downloads](https://badgen.net/npm/dm/magikfake)](https://www.npmjs.com/package/magikfake)
</div>

## 🚀 Features

- 🪄 AI Engine - Fake data are generated through an AI engine.
- 🔆 Flexible scheme - User can define a schema similar to mongoose, using primitive types.
- 🌏 Localization - Data are translated into 5 languages: 🇬🇧, 🇮🇹, 🇪🇸, 🇩🇪, 🇫🇷 
- 🏦 Dataset - Large amount of dataset in our system.
- 💾 Save schema - User can save a schema to use it at a later time.

## 📦 Install

```bash
npm install magikfake@beta
```

---
**NOTE**

This SDK is in beta; the official SDK will be released with magikfake version 1.0.0.
Use it for testing now.

---

## 🪄 Introduction

Magikfake was created to leverage the power of **AI** in generating data that closely resembles real-world data.

This is achieved through user-defined parameters that ensure data consistency.

The user is able to specify five parameters 

- **Topic** - Indicates the topic. Example: (User, Car, Motorcycle, Book, Trip etc.. );
- **Language** - Indicates the language of data. Data can be translated into six languages: English, Italian, French, Spanish and German;
- **Context** - Indicates the business context of data. Example: (Restaurant, Reak Estate, School, Cinema, Library etc.. );
- **Limit** - Indicates the number of records to generate;
- **Schema** - Indicates the data structure and the content;

The schema enables the user to define a structured output for the generated data

For each property defined, the system analyzes the key and type to generate the right value, taking into account the **topic**, **context** , and **language**.

Unlike other fake data generation systems, Magikfake simplifies schema definition by allowing the user to assign a **primitive** type (**string**, **number**, **date**, **boolean**, **objectId**, etc...) to each property, without the need for a custom type to obtain the desired value.

## 💻 Usage and access limits

To use Magikfake's library for generating fake data, users must obtain an API key. This can be done by registering for an account on the Magikfake website at the following link: https://app.magikfake.com.

Once registered, users can select from a range of subscription plans to meet their needs. These plans provide users with varying levels of access to the Magikfake library, allowing them to generate larger amounts of data and access additional features and tools.

By obtaining an API key and subscribing to a Magikfake plan, users can quickly and easily begin generating high-quality, realistic fake data for a variety of applications and use cases. The system is designed to be user-friendly and accessible, making it an ideal choice for both experienced developers and those new to data generation.

| Plan                     | Price           | Limits                   |
| ------------------------ | --------------- | ------------------------ |
| Free                     | 0€              | - 25000 token/month   - Max 20 record |
| Standard                 | Available in the official version             | Available in the official version   |
| Pro                      | Available in the official version             | Available in the official version   |

## ⚡️ Try it online

You can try Magikfake online by visiting https://magikfake.com. 1,000,000 tokens are available daily and shared among site users. If you run out of tokens, you can register on the site to take advantage of the 25,000 tokens available monthly.

## 📖 Supported types and validations

Magikfake supports a variety of primitive types that can be assigned to the properties in the schema. 

These include commonly used data types such as string, number, boolean, and date, as well as more specialized types like objectId. 

By providing support for these primitive types, Magikfake streamlines the process of generating fake data and makes it easier for users to define the structure and content of their data.

The types supported are:

- **string** - a text value. 

    **Validations**
    - **lowercase**: defines whether the text should be lowercase;
    - **uppercase**: defines whether the text should be uppercase;
    - **enum**: defines a list of allowed values for a string field.
  
    **Examples**

    | Json                                   | Description                   |
    | ---------------------------------      | --------------------------    |
    | <pre lang="json">{&#13; "name": "string" &#13;}</pre>or<pre lang="json">{&#13; "name": { &#13;   "type": "string" &#13;  }&#13;}</pre>                        | the **name** field of type **string** indicates a text value. |
    | <pre lang="json">{&#13; "name": { &#13;   "type": "string", &#13;   "lowercase": true&#13;  }&#13;}</pre>  | the **name** field uses **lowercase** validation to ensure that the text is always lowercase. |
    | <pre lang="json">{&#13; "name": { &#13;   "type": "string", &#13;   "uppercase": true&#13;  }&#13;}</pre>  | the **name** field uses **uppercase** validation to ensure that the text is always uppercase. |
    | <pre lang="json">{&#13; "gender": { &#13;   "type": "string", &#13;   "enum": ["Male", "Female"]   &#13;  }&#13;}</pre>  | the **gender** field uses **enum** validation to ensure that the text can have one of the pre-set values (Male/Female). |

- **number** - a numeric value. 

    **Validations**
    - **min**: defines the minimum allowed value;
    - **max**: defines the maximum allowed value.

    **Examples**
    | Json                                   | Description                   |
    | ---------------------------------     | --------------------------   |
    | <pre lang="json">{&#13; "age": "number"&#13;}</pre>or<pre lang="json">{&#13; "age": { &#13;   "type": "number" &#13;  }&#13;}</pre>               | the **age** field of type **number** indicates a random numerical value. |
    | <pre lang="json">{&#13; "age": { &#13;   "type": "number",  &#13;   "min": 10  &#13;  }&#13;}</pre>  | the **age** field of type **number** uses the validation **min** to define the minimum value (10) allowed for the field. |
    | <pre lang="json">{&#13; "age": { &#13;   "type": "number",  &#13;   "max": 20  &#13;  }&#13;}</pre>  | the field **age** of type **number** uses the validation **max** to define the maximum value (20) allowed for the field. |
    | <pre lang="json">{&#13; "age": { &#13;   "type": "number",   &#13;   "min": 10,  &#13;   "max": 20  &#13;  }&#13;}</pre>  | the **age** field of type **number** uses the validations **min** and **max** to define the minimum (10) and maximum (20) value allowed for the field. |

- **date** - a date and time value. 
  
   **Validations**
   - **min**: defines the minimum value in milliseconds allowed.
   - **max**: defines the maximum value in milliseconds allowed.

   **Examples**
    | Json                                    | Description                   |
    | -------------------------------------   | --------------------------   |
    | <pre lang="json">{&#13; "birth": "date"&#13;}</pre>or<pre lang="json">{&#13; "birth": { &#13;   "type": "date" &#13;  }&#13;}</pre>                | the **birth** field of type **date** indicates a random date value. |
    | <pre lang="json">{&#13; "birth": {&#13;   "type": "date", &#13;    "min": 1577836800000        &#13;  }&#13;}</pre>     | the field **birth** of type **date** uses the validation **min** to define the minimum value in milliseconds (1577836800000) allowed for the field. |
    | <pre lang="json">{&#13; "birth": {&#13;   "type": "date", &#13;    "max": 1893456000000        &#13;  }&#13;}</pre>         | the field **birth** of type **date** uses the validation **max** to define the maximum value in milliseconds (1893456000000) allowed for the field. |
    | <pre lang="json">{&#13; "birth": {&#13;   "type": "date", &#13;   "min": 1577836800000, &#13;   "max": 1893456000000&#13;  }&#13;}</pre>  | the **birth** field of type **date** uses the validations **min** and **max** to define the minimum (1577836800000) and maximum (1893456000000) value allowed for the field. |

- **boolean** - a true/false value.
  
   **Examples**

   | Json                                    | Description                   |
   | -------------------------------------   | ----------------------------  |
   | <pre lang="json">{&#13; "isNew": "boolean"&#13;}</pre>or<pre lang="json">{&#13; "isNew": { &#13;   "type": "boolean" &#13;  }&#13;}</pre>            | the **isNew** field of type **boolean** indicates a true/false value. |

- **objectId** - a unique value used in MongoDB databases.

   **Examples**

   | Json                                    | Description                   |
   | -------------------------------------   | ----------------------------  |
   | <pre lang="json">{&#13; "id": "objectId"&#13;}</pre>or<pre lang="json">{&#13; "id": { &#13;   "type": "objectId" &#13;  }&#13;}</pre>              | the **id** field of type **objectId** indicates a unique value. |

- **object** - an object value where within it it is possible to define fields of various types.

   **Examples**

   | Json                                    | Description                   |
   | -------------------------------------   | ----------------------------  |
   |<pre lang="json">{&#13; "user": { &#13;   "id": "objectId",&#13;   "firstName": "string",&#13;   "lastName": "string",&#13;   "age": "number", &#13;   "isFirstLogin": "boolean",&#13;   "birthDate": "date" &#13;   } &#13; } </pre>or<pre lang="json">{&#13; "user": {&#13; "type": { &#13;   "id": "objectId",&#13;   "firstName": "string",&#13;   "lastName": "string",&#13;   "age": "number",&#13;   "isFirstLogin": "boolean",&#13;   "birthDate": "date" &#13;   }  &#13;  } &#13; } </pre>           | the **user** field of type **object** indicates a value where it is possible to define fields of various types. |

- **array** : a list of values. The array must consist of only one element of type: **string**, **date**, **boolean**, **number**, **object** and **objectid**


   **Examples**

   | Json                                    | Description                   |
   | -------------------------------------   | ----------------------------  |
   | <pre lang="json">{&#13; "names": ["string"]&#13;}</pre>or<pre lang="json">{&#13; "names": { &#13;   "type": ['string'] &#13;  }&#13;}</pre>           | the **names** field of type **array** indicates a list of values of type string. |
   | <pre lang="json">{&#13; "numbers": ["number"]&#13;}</pre>or<pre lang="json">{&#13; "numbers": { &#13;   "type": ['number'] &#13;  }&#13;}</pre>          | the **numbers** field of type **array** indicates a list of values of type number. |
   | <pre lang="json">{&#13; "dates": ["date"]&#13;}</pre>or<pre lang="json">{&#13; "dates": { &#13;   "type": ['date'] &#13;  }&#13;}</pre>   | the **dates** field of type **array** indicates a list of values of type date. |
   | <pre lang="json">{&#13; "booleans": ["boolean"] &#13;}</pre>or<pre lang="json">{&#13; "booleans": { &#13;   "type": ['boolean'] &#13;  }&#13;}</pre>  | the **booleans** field of type **array** indicates a list of values of type boolean. |
   | <pre lang="json">{&#13; "users": [&#13;  { &#13;   "id": "objectId",&#13;   "firstName": "string", &#13;   "lastName": "string", &#13;   "age": "number", &#13;   "isFirstLogin": "boolean",    &#13;   "birthDate": "date" &#13;   }&#13; ]&#13;}</pre>or<pre lang="json">{&#13; "users": {&#13;  "type": [{ &#13;    "id": "objectId",&#13;    "firstName": "string", &#13;    "lastName": "string", &#13;    "age": "number", &#13;    "isFirstLogin": "boolean",    &#13;    "birthDate": "date" &#13;   }]&#13; }&#13;}</pre>  | the **users** field of type **array** indicates a list of values of type object, where it is possible to define fields of various types. |


## 📜 Schema example

Here is a schema example with various types of fields:

```
{
  "id": "objectId",
  "firstName": "string",
  "lastName": "string",
  "age": { 
    "type": "number", 
    min: 18, 
    max: 80
  },
  "isFirstLogin": "boolean",
  "birthDate": {
    "type": "date",
    "min": -939972032000, 
    "max": 953483968000 
  }"
}
```

Assuming the defined **language** is **english** and the defined **topic** is **user**

The fake data generated will have this type of structure:

```
[{
  "id": "d020b9df5b0f319eb2d03e6b",
  "firstName": "Bianca",
  "lastName": "Santoro",
  "age": 18,
  "isFirstLogin": false,
  "birthDate": "2008-02-18T00:00:00.000Z"
}....]
```

The result will try to provide a compatibility between the keys and the types, this to make the data as truthful as possible.     


## 🎯​ Fake data

### Generate fake data

Generating fake data with Magikfake is a straightforward process that can be accomplished using the system's built-in generation method. Once the user has defined the desired schema and provided the necessary parameters, they can simply call the generation method to create the desired number of records.

**Method**
```js
generate(query: IFakeDataQuery): Promise<{data: Record<string, any>[], tokenStatus: ITokenStatus}>
```
**Params**
- query: It is an object that contains the parameters for data generation.
  
  - language **(required)**: **Language** - Indicates the language of data. The values available are: **en**, **it**, **es**, **de**, **fr**.
  - topic **(required)**: **string** - A casual string that represents the topic. Example: (User, Car, Motorcycle, Book, Trip etc.. );
  - context **(optional)**: **Context** - The business context of your data. It is possible to choose certain values. See **Context** enum values.
  - limit **(optional)**: **number** - Indicates the number of records to generate. If not specified, the number of records generated are 20.
  - schema **(required)**: **object** - Indicates the data structure and the content;

**Usage**
```ts
import {Client, Language, Context }from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const query = {
    language: Language.en, // required: The values available are: en, it, es, de, fr.
    topic: 'user',  // required: A casual string that represents the topic
    context: Context.library, // optional: The business context of your data. It is possible to choose certain values. See Context enum values.
    limit: 4, // optional: The number of records to generate.
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
    }  // required: Structure and content of your data
}

const fakeData = await client.fakeData.generate(query)
```
**Response example**
```json
{
    "data": [
          {
            "id": "98ef2068fe0f7f95a4f3f510",
            "name": {
            "first": "Bianca",
            "last": "Santoro"
            },
            "address": "via Traiano 23, 82100 Benevento, Italia",
            "birth": "2008-02-18T00:00:00.000Z",
            "city": "Benevento",
            "age": 18,
            "username": "Bianca.Santoro18",
            "email": "Bianca.Santoro@gmail.com",
            "image": "hhttps://media.istockphoto.com/id/1371214582/it/foto/ritratto-allaperto-della-ragazza-adolescente-bionda-di-15-anni-con-i-capelli-lunghi-in-t-shirt.jpg?s=170667a&w=0&k=20&c=4SZCfVFnqcBzQKFzDhxL55HIAYyvBGMSm2TmDkMGq70="
        },
        {
            "id": "9de88da16ab0dd88032717a9",
            "name": {
            "first": "Vincenzo",
            "last": "Marchetti"
            },
            "address": "corso Italia 156, 97100 Ragusa, Italia",
            "birth": "1959-10-10T00:00:00.000Z",
            "city": "Ragusa",
            "age": 18,
            "username": "Vincenzo.Marchetti18",
            "email": "Vincenzo.Marchetti@gmail.com",
            "image": "https://media.istockphoto.com/id/1319241181/it/foto/ritratto-di-bel-uomo-anziano-in-piedi-accanto-alla-finestra-della-cucina.jpg?s=612x612&w=0&k=20&c=GjmcQC1-WDw-CwnSNUjJIDiV8Tlb-cn0-IVypXSIYxI="
        },
        {
            "id": "40f01a81099b922baa91897e",
            "name": {
            "first": "Isabella",
            "last": "Barbieri"
            },
            "address": "via Fardella 23, 91100 Trapani, Italia",
            "birth": "2014-12-25T00:00:00.000Z",
            "city": "Trapani",
            "age": 30,
            "username": "Isabella.Barbieri30",
            "email": "Isabella.Barbieri@gmail.com",
            "image": "https://media.istockphoto.com/id/523679371/it/foto/ritratto-di-profilo-di-sonno-neonato.jpg?s=612x612&w=0&k=20&c=QLIxjEE0KTH6Fj_Dr0m7m48e5wQRK49cYk_e01QFTks="
        },
        {
            "id": "eea8b21b96acad972192362c",
            "name": {
            "first": "Giorgia",
            "last": "Ferrara"
            },
            "address": "via Emilia Centro 234, 41121 Modena, Italia",
            "birth": "2000-03-17T00:00:00.000Z",
            "city": "Modena",
            "age": 26,
            "username": "Giorgia.Ferrara26",
            "email": "Giorgia.Ferrara@gmail.com",
            "image": "https://media.istockphoto.com/id/536932782/it/foto/brillante-sorriso-sulla-bella-brunetta-ritratto.jpg?s=612x612&w=0&k=20&c=D7PmENILeaBFTMSORojL3rRuiL-x6VL6EBKQucw-_xI="
        },
    ],
    "tokenStatus": {
        "tokensConsumedForRequest": 5000, // Indicates the number of tokens consumed for the request
        "tokensOverflow": 0, // Indicates the number of token that overflowed the plan
        "tokenLimit": 25000, // Number of token per month included in the plan
        "tokenRemaining": 500, // Number of token remaining
        "tokenResetDate": "Sat, 17 Jun 2023 08:17:07 GMT" // Indicates the date for the token reset
    }
}
```

### Get token status

To view the status of token for the generation of fake data, a method has been set up to monitor the number of token available per month.

**Usage**
```ts
import {Client, Language, Context }from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const tokenStatus = await client.fakeData.tokenStatus()
```
**Response example**
```json
{
    "tokensOverflow": 0, // Indicates the number of tokens that overflowed the plan
    "tokenLimit": 500, // Number of token per month included in the plan
    "tokenRemaining": 500, // Number of token remaining
    "tokenResetDate": "Sat, 17 Jun 2023 08:17:07 GMT" // Indicates the date for the token reset
}
```

**Method**
```js
tokenStatus(): Promise<ITokenStatus>
```

## 📜 Schema

With Magikfake, users have the ability to save their defined schema for future use. 

This feature allows for easy and efficient generation of data with consistent structures and formats.

In addition to saving individual schemas, users can also take advantage of a common schema library to further speed up the process of generating data.

To help users work with their saved schemas and the common schema library, Magikfake provides a variety of methods and functions that simplify the process of generating and handling data. 

These tools make it easy for users to work with their data in a way that is efficient and intuitive, regardless of their level of experience with data generation and management.

### Find schema

**Method**
```js
find(query: ISchemaQuery): Promise<{data: ISchema[], count: number}>
```

**Params**
- query: It is an object that contains the parameters to find schema.
  
  - type: **(optional)**: **SchemaType** - Indicates the type of schema. Schemas are categorized by **personal** and **common**;
  - topic **(optional)**: **string** - A casual string that represents the topic. Example: (User, Car, Motorcycle, Book, Trip etc.. );
  - context: **(optional)**: **Context** - A business context of your data. It is possible to choose certain values. See **Context** enum values.
  - limit: **(optional)**: **number** - Indicates the number of schema to return. If not specified, all the schemes are returned, including personal and common ones.
  - page: **(optional)**: **number** - Indicates the page number, the page being the one requested. . If not specified, the page number is 0.

**Usage**
```ts
import {Client, SchemaType, Context }from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const query = {
    type: SchemaType.personal, // optional: the type of schema
    topic: 'user',  // required: A casual string that represents the topic
    context: Context.library // optional: A business context of your data. It is possible to choose certain values. See Context enum values.
}

const response = await client.schema.find(query) 
```
**Response example**
```json
{
    "data": [{   
        "id":"642ab202f419d954a2b35604",
        "user": {
            "id": "642ab202f419d954a2b45705",
            "firstName": "Mario",
            "lastName": "Rossi"
        },
        "topic":"user",
        "schema": {
            "id": "objectId",
            "name": {
                "first": "string",
                "last": "string",
            },
            "address": "string",
            "birth": "date",
            "city": "string",
            "age": {
                "type": "number",
                "min": 18, 
                "max": 60
            },
            "username": "string",
            "email": "string",
            "image": "string"
        }
    },{   
        "id":"642ab202f419d954a2b35605",
        "user": {
            "id": "642ab202f419d954a2b45705",
            "firstName": "Mario",
            "lastName": "Rossi"
        },
        "topic":"user",
        "schema": {
            "id": "objectId",
            "firstname": "string",
            "lastname": "string",
            "address": "string",
            "birth": "date",
            "city": "string",
            "age": {
                "type": "number",
                "min": 18, 
                "max": 60
            },
            "username": "string",
            "email": "string"
        }
    }],
    "count": 2
}
```

### Find one schema by id

**Method**
```js
findOneById(id: string): Promise<ISchema>
```

**Params**
- id **(required)**: **string** Indicates the id of schema to return.

**Usage**
```ts
import {Client}from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const response = await client.schema.findOneById("642ab202f419d954a2b35605") 
```
**Response example**
```json
{  
    "id":"642ab202f419d954a2b35605",
    "user": {
        "id": "642ab202f419d954a2b45705",
        "firstName": "Mario",
        "lastName": "Rossi"
    },
    "topic":"user",
    "schema": {
        "id": "objectId",
        "firstname": "string",
        "lastname": "string",
        "address": "string",
        "birth": "date",
        "city": "string",
        "age": {
            "type": "number",
            "min": 18, 
            "max": 60
        },
        "username": "string",
        "email": "string"
    }
}
```

### Save schema

**Method**
```js
save(params: ISchemaParams): Promise<ISchema>
```

**Params**

- params: It is an object that contains the parameters to save schema.
    - topic **(required)**: **string** - A casual string that represents the topic. Example: (User, Car, Motorcycle, Book, Trip etc.. );
    - context: **(optional)**: **Context** - A business context of your data. It is possible to choose certain values. See **Context** enum values.
    - schema: **(required)**: **object** - Indicates the data structure and the content;

**Usage**
```ts
import {Client}from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const params = {
    topic:"user",
    schema: {
        id: "objectId",
        firstname: "string",
        lastname: "string",
        address: "string",
        birth: "date",
        city: "string",
        age: {
            type: "number",
            min: 18, 
            max: 60
        },
        username: "string",
        email: "string"
    }
}

const response = await client.schema.save(params) 
```
**Response example**
```json
{  
    "id":"642ab202f419d954a2b35605",
    "user": {
        "id": "642ab202f419d954a2b45705",
        "firstName": "Mario",
        "lastName": "Rossi"
    },
    "topic":"user",
    "schema": {
        "id": "objectId",
        "firstname": "string",
        "lastname": "string",
        "address": "string",
        "birth": "date",
        "city": "string",
        "age": {
            "type": "number",
            "min": 18, 
            "max": 60
        },
        "username": "string",
        "email": "string"
    }
}
```

### Update schema

It is possible to be able to update only the personal schemas, while the common schema are defined by the system and cannot be updated.

This limitation is in place to ensure the consistency and availability of the common schemas, which are used by all users of the system. By restricting users from deleting these schemas, Magikfake ensures that all users have access to the same set of reliable, high-quality schemas for their data generation needs.

**Method**
```js
update(id: string, params: ISchemaParams): Promise<ISchema>
```

**Params**

- id **(required)**: **string** - Indicates the id of schema to update;
- params: It is an object that contains the parameters to update schema.
    - topic **(required)**: **string** - A casual string that represents the topic. Example: (User, Car, Motorcycle, Book, Trip etc.. );
    - context: **(optional)**: **Context** - A business context of your data. It is possible to choose certain values. See **Context** enum values.
    - schema: **(required)**: **object** - Indicates the data structure and the content;

**Usage**
```ts
import {Client}from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const params = {
    topic:"user",
    schema: {
        id: "objectId",
        firstname: "string",
        lastname: "string",
        address: "string",
        birth: "date",
        city: "string",
        age: {
            type: "number",
            min: 18, 
            max: 60
        },
        username: "string",
        email: "string"
    }
}

const response = await client.schema.update("642ab202f419d954a2b35605", params) 
```
**Response example**
```json
{  
    "id":"642ab202f419d954a2b35605",
    "user": {
        "id": "642ab202f419d954a2b45705",
        "firstName": "Mario",
        "lastName": "Rossi"
    },
    "topic":"user",
    "schema": {
        "id": "objectId",
        "firstname": "string",
        "lastname": "string",
        "address": "string",
        "birth": "date",
        "city": "string",
        "age": {
            "type": "number",
            "min": 18, 
            "max": 60
        },
        "username": "string",
        "email": "string"
    }
}
```

### Delete schema

It is possible to be able to delete only the personal schemas, while the common schema are defined by the system and cannot be deleted.

This limitation is in place to ensure the consistency and availability of the common schemas, which are used by all users of the system. By restricting users from deleting these schemas, Magikfake ensures that all users have access to the same set of reliable, high-quality schemas for their data generation needs.

**Method**
```js
delete(id: string): Promise<Boolean>
```

**Params**

- id **(required)**: **string** - Indicates the id of schema to delete;

**Usage**
```ts
import {Client} from 'magikfake';

const client = new Client({apiKey: 'your-api-key'});

const response = await client.schema.delete("642ab202f419d954a2b35605") 
```
**Response example**
```json
true
```

## ❗ Errors

When using the methods provided by the Magikfake library, it is possible that an exception may be raised. If this occurs, the user will receive an error message indicating the nature of the issue.

Some of the errors that may be encountered include:

- **BadRequestError**: This error is raised when the parameters passed to a method are not formatted correctly or are otherwise invalid;
- **TooManyRequestsError**: This error is generated only for free subscriptions. This error is raised when the user has exceeded the monthly token limit for their API key;
- **PaymentRequired**: This error is generated when the user is insolvent and after several attempts the payment of the last invoice has not been successful;
- **InvalidAuthorization**: This error is raised when the API key provided by the user is invalid or has expired.
  
In any of these cases, the user should review their code and make any necessary corrections or updates to address the error. By working with the Magikfake library and handling errors appropriately, users can generate high-quality, realistic fake data for a variety of purposes.


## 🆘 Support and issue

If you need support you can contact us at the following email: support@magikfake.com.

If you encounter any problems generating the data, we ask you to open an issue here on github.

Your support is essential to improving Magikfake