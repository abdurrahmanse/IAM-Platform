# 08 API STANDARDS

## Objective
To ensure complete consistency across all REST API endpoints.

## Why
Consistent APIs allow frontend clients and third-party integrations to consume services predictably, reducing integration time and bugs.

## How
- **Response Format:** All successful responses must use a standard envelope:
  `{"success": true, "data": {...}, "meta": {"page": 1, ...}}`
- **Error Format:** All errors must use a standard envelope:
  `{"success": false, "error": {"code": "ERR_NOT_FOUND", "message": "User not found."}}`
- **Pagination:** Use offset/limit or cursor-based pagination. Response must include `meta.total`.
- **Filtering & Sorting:** Standardize query parameters (e.g., `?sort=-created_at&status=active`).
- **Versioning:** All routes must be versioned in the URL path (e.g., `/api/v1/users`).

## When
Enforced on every endpoint created.

## Best Practices
- Use appropriate HTTP status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error).
- RESTful resource naming (plural nouns: `/users`, `/roles`).

## Required Tools
- FastAPI automatic OpenAPI schema generation.
- Custom Exception Handlers overriding FastAPI's default 422 responses to match the global error envelope.

## Forbidden Practices
- Returning arrays at the root of a JSON response (always wrap in `data`).
- Using HTTP 200 for everything and embedding error codes in the response body exclusively.
- RPC-style endpoints (`/api/v1/updateUser`) unless strictly necessary; use PUT/PATCH to `/api/v1/users/{id}`.

## Success Criteria
- API Clients (frontend) can write a single, global Axios interceptor to handle all errors and pagination generically.
