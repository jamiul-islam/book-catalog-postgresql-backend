# Book Catalog Backend

[👉 live server]('#')

## ER Diagram

![ER Diagram](ER-diragram.png)

## Api Reference

### user api

```javascript
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/009aeee6-70ba-434c-a7fa-d7a78cb3df83 (Single GET)
api/v1/users/009aeee6-70ba-434c-a7fa-d7a78cb3df83 (PATCH)
api/v1/users/009aeee6-70ba-434c-a7fa-d7a78cb3df83 (DELETE)
api/v1/profile (GET)
```

### category api

```javascript
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/93e47a8c-a8fd-4785-a453-55a0fde4805a (Single GET)
api/v1/categories/93e47a8c-a8fd-4785-a453-55a0fde4805a (PATCH)
api/v1/categories/93e47a8c-a8fd-4785-a453-55a0fde4805a (DELETE)
```

### book api

```javascript
api/v1/books/create-book (POST)
api/v1/books (GET)
api/v1/books?limit=2 (GET) //filtering
api/v1/books/24986897-75e9-4bbc-a5d0-68d0d24ac0df (GET by id)
api/v1/books/category/8e0079fc-4193-431f-9ebf-b290ebe3b502 (GET by category)
api/v1/books/24986897-75e9-4bbc-a5d0-68d0d24ac0df (PATCH)
api/v1/books/24986897-75e9-4bbc-a5d0-68d0d24ac0df (DELETE)
```

### order api

```javascript
api/v1/orders/create-order(POST)
api/v1/orders (GET)
api/v1/orders/:orderId (GET)
```
