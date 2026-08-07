# 09 SECURITY GUIDELINES

## Objective
To mandate enterprise-grade security measures across the IAM platform.

## Why
As an Identity platform, security is the paramount feature. Compromise is unacceptable.

## How
- **Authentication:** Stateless JWTs for Access Tokens (short-lived, 15m), stateful Refresh Tokens stored in Redis (long-lived, 7d).
- **Token Storage:** JWTs must be transmitted and stored in `HttpOnly`, `Secure`, `SameSite=Strict` cookies. Never in `localStorage`.
- **Passwords:** Hashed using Argon2. Strict complexity policies enforced.
- **Rate Limiting:** IP and user-based token bucket rate limiting via Redis on all public endpoints (Login, Registration, Password Reset).
- **Session Revocation:** Redis allows immediate blacklisting of specific sessions or all sessions for a user.
- **Audit Logging:** Every mutating action (create, update, delete) and critical read must be logged to a centralized Audit table.

## When
Security considerations must be evaluated during the design phase of every single feature.

## Best Practices
- Defense in depth: Validate on the client, validate on the API gateway, validate in the FastAPI backend, and enforce constraints at the Database level.
- Encrypt sensitive PII at rest in the database.

## Required Tools
- Redis (Session state, Rate limiting)
- Argon2 (Hashing)
- Helmet (Node.js) / Secure Headers middleware (FastAPI)

## Forbidden Practices
- Storing JWTs in browser `localStorage` or `sessionStorage`.
- Logging sensitive data (passwords, tokens, PII) to standard output.
- Trusting client input without server-side validation.

## Success Criteria
- The platform passes automated security scanning (OWASP Top 10) without critical vulnerabilities.
- Sessions can be immediately and reliably revoked globally.
