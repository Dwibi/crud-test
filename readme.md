# SIMPLE CRUD TEST

This is a simple crud test with express js

## Getting Started

Follow these steps to get started with the project:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Initialize Sequelize configuration:

   ```bash
   npx sequelize init:config
   ```

   > Fill in the configuration details as prompted.

3. Initialize Sequelize configuration:
   ```bash
   npx sequelize db:migrate
   ```
4. Seed the database with dummy data:
   ```bash
   npx sequelize db:seed:all
   ```
5. Start the server:
   ```bash
   node index.js
   ```

---

## API Documentation

### Get All Book

- Method: GET
- URL:

```http
  GET /books
```

- Success Response:
- Code: 200
- Result:

```json
{
  "isError": false,
  "message": "Get books success!",
  "data": [
    {
      "id": 1,
      "title": "Book Title 1",
      "author": "Author 1",
      "description": "Description of Book 1",
      "price": 51,
      "createdAt": "2024-03-20T02:31:16.000Z",
      "updatedAt": "2024-03-20T02:31:16.000Z"
    },
    {
      "id": 2,
      "title": "Book Title 2",
      "author": "Author 2",
      "description": "Description of Book 2",
      "price": 109,
      "createdAt": "2024-03-20T02:31:16.000Z",
      "updatedAt": "2024-03-20T02:31:16.000Z"
    },
    {
      "id": 3,
      "title": "Book Title 3",
      "author": "Author 3",
      "description": "Description of Book 3",
      "price": 17,
      "createdAt": "2024-03-20T02:31:16.000Z",
      "updatedAt": "2024-03-20T02:31:16.000Z"
    },
    {
      "id": 4,
      "title": "Book Title 4",
      "author": "Author 4",
      "description": "Description of Book 4",
      "price": 103,
      "createdAt": "2024-03-20T02:31:16.000Z",
      "updatedAt": "2024-03-20T02:31:16.000Z"
    },
    {
      "id": 5,
      "title": "Book Title 5",
      "author": "Author 5",
      "description": "Description of Book 5",
      "price": 46,
      "createdAt": "2024-03-20T02:31:16.000Z",
      "updatedAt": "2024-03-20T02:31:16.000Z"
    }
  ]
}
```

### Get a specific book

- Method: GET
- URL:

```http
  GET /books/${id}
```

- Success Response:
- Code: 200
- Result:

```json
{
  "isError": false,
  "message": "Get Book By Id success!",
  "data": {
    "id": 1,
    "title": "Book Title 1",
    "author": "Author 1",
    "description": "Description of Book 1",
    "price": 51,
    "createdAt": "2024-03-20T02:31:16.000Z",
    "updatedAt": "2024-03-20T02:31:16.000Z"
  }
}
```

- Not Found Response:
- Code: 404
- Result:

```json
{
  "isError": true,
  "message": "Book not found!",
  "data": null
}
```

### Update a Book

- Method: POST
- URL:

```http
  POST /books/${id}
```

| Body          | Type     | Description   |
| :------------ | :------- | :------------ |
| `title`       | `string` | **Required**. |
| `author`      | `string` | **Required**. |
| `description` | `string` | **Required**. |
| `price`       | `number` | **Required**. |

- Success Response:
- Code: 201
- Result:

```json
{
  "isError": false,
  "message": "Book Created!",
  "data": {
    "id": 14,
    "title": "books 11",
    "author": "author 11",
    "description": "description 11",
    "price": 20,
    "updatedAt": "2024-03-20T03:41:59.117Z",
    "createdAt": "2024-03-20T03:41:59.117Z"
  }
}
```

- Bad Request Response:
- Code: 400
- Result:

```json
{
  "isError": true,
  "message": "Please fill all fields!",
  "data": null
}
```

### Update a Book

- Method: PUT
- URL:

```http
  PUT /books/${id}
```

| Body          | Type     | Description   |
| :------------ | :------- | :------------ |
| `title`       | `string` | **Required**. |
| `author`      | `string` | **Required**. |
| `description` | `string` | **Required**. |
| `price`       | `number` | **Required**. |

- Success Response:
- Code: 200
- Result:

```json
{
  "isError": false,
  "message": "Book updated!",
  "data": null
}
```

- Bad Request Response:
- Code: 400
- Result:

```json
{
  "isError": true,
  "message": "Please fill all fields!",
  "data": null
}
```

- Not Found Response:
- Code: 404
- Result:

```json
{
  "isError": true,
  "message": "Book not found!",
  "data": null
}
```

### Update a Book

- Method: DELETE
- URL:

```http
  DELETE /books/${id}
```

- Success Response:
- Code: 200
- Result:

```json
{
  "isError": false,
  "message": "Book deleted!",
  "data": null
}
```

- Not Found Response:
- Code: 404
- Result:

```json
{
  "isError": true,
  "message": "Book not found!",
  "data": null
}
```
