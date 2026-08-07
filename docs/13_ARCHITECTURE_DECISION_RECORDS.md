# 13 ARCHITECTURE DECISION RECORDS

## Objective
To document significant architectural and engineering decisions permanently.

## Why
Over a 10-year lifespan, original developers will leave. New engineers need to understand *why* a specific technology or pattern was chosen (e.g., why Argon2 instead of bcrypt).

## How
Every major decision must be recorded here in the following format:

### Format
**Title:** [Short title of the decision]
**Date:** [YYYY-MM-DD]
**Status:** [Proposed | Accepted | Rejected | Superseded]

**Context:**
What is the problem or situation requiring a decision?

**Decision:**
What is the final decision?

**Consequences:**
What becomes easier or more difficult because of this change?

## When
An ADR should be created when introducing a new core dependency, changing a database schema fundamentally, or altering a design pattern globally.

## Required Tools
- Markdown

## Forbidden Practices
- Making massive architectural shifts without documenting the reasoning here.

## Success Criteria
- A new developer can read this file and understand the historical evolution of the platform`s architecture.
