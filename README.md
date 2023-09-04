# Book Catalog Backend

[👉 live server](https://book-catalog-postgresql-backend.vercel.app)

## ER Diagram

![ER Diagram](ER-diragram.png)

## Api Reference

```javascript
// ********* authorization token for customer **********

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJmYzA4ZTA2Mi1jODRhLTQ5NWYtOTJjOC02MzlhYTdhNWFkMGMiLCJyb2xlIjoiY3VzdG9tZXIifQ.8nJlYDnrgd_b0lKydsy5ez7xkvI2nzurK0pUkBL9i2M

// ********* authorization token for admin **********

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1MTM5NmUzZS1hNDJhLTQ0ZmEtOTJiMS0zNmRmZTcyNGU4NWQiLCJyb2xlIjoiYWRtaW4ifQ.58peGIN3hU5ar_UO4-p9FSYFYSDR7C697IEZoUzfMrY
```

### user api

```javascript
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/fc08e062-c84a-495f-92c8-639aa7a5ad0c (Single GET)
api/v1/users/fc08e062-c84a-495f-92c8-639aa7a5ad0c (PATCH)
api/v1/users/fc08e062-c84a-495f-92c8-639aa7a5ad0c (DELETE)
api/v1/profile (GET)
```

### category api

```javascript
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/1000b75a-8e20-461c-9168-538a59b9dec4 (Single GET)
api/v1/categories/1000b75a-8e20-461c-9168-538a59b9dec4 (PATCH)
api/v1/categories/1000b75a-8e20-461c-9168-538a59b9dec4 (DELETE)
```

### book api

```javascript
api/v1/books/create-book (POST)
api/v1/books (GET)
api/v1/books?limit=2 (GET) //filtering
api/v1/books/category/f676203c-2b55-4565-86bd-35fc3c26e868 (GET by category)
api/v1/books/ff178adb-c448-43cb-9d18-86f04dd13a25 (GET by id)
api/v1/books/ff178adb-c448-43cb-9d18-86f04dd13a25 (PATCH)
api/v1/books/ff178adb-c448-43cb-9d18-86f04dd13a25 (DELETE)
```

### order api

```javascript
api/v1/orders/create-order(POST)
api/v1/orders (GET)
api/v1/orders/:orderId (GET)
```
