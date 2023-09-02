# Book Catalog Backend

[👉 live server]('#')

## ER Diagram

![ER Diagram](ER-diragram.png)

## Api Reference

### user api

```javascript
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/d759e670-96bd-48d6-acf8-e915de080e2b (Single GET)
api/v1/users/d759e670-96bd-48d6-acf8-e915de080e2b (PATCH)
api/v1/users/d759e670-96bd-48d6-acf8-e915de080e2b (DELETE)
api/v1/profile (GET)
```

### category api

```javascript
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/f1f9205e-6214-41b5-a167-719bf47fda31 (Single GET)
api/v1/categories/f1f9205e-6214-41b5-a167-719bf47fda31 (PATCH)
api/v1/categories/f1f9205e-6214-41b5-a167-719bf47fda31 (DELETE)
```

### book api

```javascript
api/v1/books/create-book (POST)
api/v1/books (GET)
api/v1/books?limit=2 (GET) //filtering
api/v1/books/f64dd9fc-3752-4bc4-abcc-607a60a50088 (GET by id)
api/v1/books/category/0a15269c-2b44-4911-854b-21e7e81734d0 (GET by category)
api/v1/books/f64dd9fc-3752-4bc4-abcc-607a60a50088 (PATCH)
api/v1/books/f64dd9fc-3752-4bc4-abcc-607a60a50088 (DELETE)
```

## pending

- authorization for user route
- authorization for category
- authorization for book
- filtering for book - DONE
