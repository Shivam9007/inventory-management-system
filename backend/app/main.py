from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal, engine, Base
from app.models import Product, Customer, Order
from app.schemas import (
    ProductCreate,
    ProductResponse,
    CustomerCreate,
    CustomerResponse,
    OrderCreate,
    OrderResponse,
)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Inventory Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Home Route
@app.get("/")
def home():
    return {"message": "Inventory Management API Running"}


# ==========================
# PRODUCT ROUTES
# ==========================

@app.post("/products", response_model=ProductResponse)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    db_product = Product(
        name=product.name,
        sku=product.sku,
        price=product.price,
        stock_quantity=product.stock_quantity,
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product


@app.get("/products", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()


# ==========================
# CUSTOMER ROUTES
# ==========================

@app.post("/customers", response_model=CustomerResponse)
def create_customer(customer: CustomerCreate, db: Session = Depends(get_db)):
    db_customer = Customer(
        name=customer.name,
        email=customer.email,
    )

    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)

    return db_customer


@app.get("/customers", response_model=list[CustomerResponse])
def get_customers(db: Session = Depends(get_db)):
    return db.query(Customer).all()


# ==========================
# ORDER ROUTES
# ==========================

@app.post("/orders", response_model=OrderResponse)
def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == order.product_id).first()

    if not product:
        return {"error": "Product not found"}

    if product.stock_quantity < order.quantity:
        return {"error": "Insufficient stock"}

    total = product.price * order.quantity

    product.stock_quantity -= order.quantity

    db_order = Order(
        customer_id=order.customer_id,
        product_id=order.product_id,
        quantity=order.quantity,
        total_price=total
    )

    db.add(db_order)
    db.commit()
    db.refresh(db_order)

    return db_order


@app.get("/orders", response_model=list[OrderResponse])
def get_orders(db: Session = Depends(get_db)):
    return db.query(Order).all()