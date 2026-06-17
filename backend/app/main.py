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