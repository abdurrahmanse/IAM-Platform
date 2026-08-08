from fastapi import FastAPI
from routers import health

app = FastAPI(
    title="IAM Platform API",
    description="Enterprise IAM Platform API",
    version="1.0.0"
)

app.include_router(health.router, prefix="/api/v1")
