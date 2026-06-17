from pydantic import BaseModel


# =========================
# Product Schemas
# =========================

class ProductCreate(BaseModel):
    name: str
    sku: str
    price: float
    stock_quantity: int


class ProductResponse(ProductCreate):
    id: int

    class Config:
        from_attributes = True


# =========================
# Customer Schemas
# =========================

class CustomerCreate(BaseModel):
    name: str
    email: str


class CustomerResponse(CustomerCreate):
    id: int

    class Config:
        from_attributes = True


# =========================
# Order Schemas
# =========================

class OrderCreate(BaseModel):
    customer_id: int
    product_id: int
    quantity: int


class OrderResponse(BaseModel):
    id: int
    customer_id: int
    product_id: int
    quantity: int
    total_price: float

    class Config:
        from_attributes = True