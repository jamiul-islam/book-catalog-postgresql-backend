# Book Catalog Backend

[👉 live server]('#')

## ER Diagram

![ER Diagram](ER-diragram.png)

## Api Reference

### user module

```javascript
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/d759e670-96bd-48d6-acf8-e915de080e2b (Single GET)
api/v1/users/d759e670-96bd-48d6-acf8-e915de080e2b (PATCH)
api/v1/users/d759e670-96bd-48d6-acf8-e915de080e2b (DELETE)
api/v1/profile (GET)
```

### category module

```javascript
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/f1f9205e-6214-41b5-a167-719bf47fda31 (Single GET)
api/v1/categories/f1f9205e-6214-41b5-a167-719bf47fda31 (PATCH)
api/v1/categories/f1f9205e-6214-41b5-a167-719bf47fda31 (DELETE)
```

## pending

- authorization for user route
- authorization for category
