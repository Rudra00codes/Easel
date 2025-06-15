# MyArtVibe API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

### Google OAuth

#### Initiate Google OAuth
```http
GET /auth/google
```
Initiates the Google OAuth flow. Redirects to Google's consent screen.

#### Google OAuth Callback
```http
GET /auth/google/callback
```
Handles the OAuth callback from Google. Returns a JWT token.

**Response**
```json
{
  "token": "jwt_token_here"
}
```

#### Get Current User
```http
GET /auth/me
```
Returns the current authenticated user's information.

**Headers**
```
Authorization: Bearer <jwt_token>
```

**Response**
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "User Name",
  "role": "user"
}
```

## Artworks

### List Artworks
```http
GET /artworks
```

**Query Parameters**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `category` (optional): Filter by category
- `status` (optional): Filter by status (available/sold/exhibition)
- `minPrice` (optional): Minimum price
- `maxPrice` (optional): Maximum price
- `search` (optional): Search term
- `featured` (optional): Filter featured artworks (true/false)

**Response**
```json
{
  "artworks": [
    {
      "id": "artwork_id",
      "title": "Artwork Title",
      "description": "Artwork Description",
      "price": 1000,
      "medium": "Oil on Canvas",
      "dimensions": {
        "width": 100,
        "height": 100,
        "unit": "cm"
      },
      "year": 2024,
      "category": "Painting",
      "tags": ["abstract", "modern"],
      "images": ["image_url_1", "image_url_2"],
      "status": "available",
      "featured": true
    }
  ],
  "totalPages": 5,
  "currentPage": 1,
  "total": 50
}
```

### Get Single Artwork
```http
GET /artworks/:id
```

**Response**
```json
{
  "id": "artwork_id",
  "title": "Artwork Title",
  "description": "Artwork Description",
  "price": 1000,
  "medium": "Oil on Canvas",
  "dimensions": {
    "width": 100,
    "height": 100,
    "unit": "cm"
  },
  "year": 2024,
  "category": "Painting",
  "tags": ["abstract", "modern"],
  "images": ["image_url_1", "image_url_2"],
  "status": "available",
  "featured": true
}
```

### Create Artwork (Admin Only)
```http
POST /artworks
```

**Headers**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body**
```json
{
  "title": "Artwork Title",
  "description": "Artwork Description",
  "price": 1000,
  "medium": "Oil on Canvas",
  "dimensions": {
    "width": 100,
    "height": 100,
    "unit": "cm"
  },
  "year": 2024,
  "category": "Painting",
  "tags": ["abstract", "modern"],
  "images": ["image_url_1", "image_url_2"],
  "status": "available",
  "featured": true
}
```

### Update Artwork (Admin Only)
```http
PUT /artworks/:id
```

**Headers**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body**
```json
{
  "title": "Updated Title",
  "price": 1200,
  "status": "sold"
}
```

### Delete Artwork (Admin Only)
```http
DELETE /artworks/:id
```

**Headers**
```
Authorization: Bearer <jwt_token>
```

## Error Responses

### 400 Bad Request
```json
{
  "message": "Invalid request data"
}
```

### 401 Unauthorized
```json
{
  "message": "Please authenticate"
}
```

### 403 Forbidden
```json
{
  "message": "Access denied. Admin only."
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Server Error
```json
{
  "message": "Something went wrong!"
}
```

## Rate Limiting

The API implements rate limiting:
- 100 requests per 15 minutes per IP address
- Rate limit headers are included in responses:
  - `X-RateLimit-Limit`: Maximum requests per window
  - `X-RateLimit-Remaining`: Remaining requests in current window
  - `X-RateLimit-Reset`: Time when the rate limit resets

## Best Practices

1. **Authentication**
   - Always include the JWT token in the Authorization header
   - Handle token expiration gracefully
   - Implement refresh token mechanism if needed

2. **Error Handling**
   - Check response status codes
   - Handle network errors
   - Implement retry logic for failed requests

3. **Performance**
   - Use pagination for large datasets
   - Implement client-side caching
   - Use appropriate filters to reduce data transfer

4. **Security**
   - Never store tokens in localStorage
   - Use HTTPS in production
   - Validate all user input 