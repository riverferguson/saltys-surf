from sqlalchemy_serializer import SerializerMixin

from config import *
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy


class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    username = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    reviews = db.relationship('Review', backref='user')
    cart_items = association_proxy('reviews', 'cart_items')
    
    def __repr__(self):
        return f'<User {self.id}: {self.username}'
    
    
class Cartitem(db.Model, SerializerMixin):
    __tablename__ = "cartitems"
    
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    product_id =  db.Column(db.Integer, db.ForeignKey('products.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    
    
    def __repr__(self):
        return f'<Cartitem {self.id}'
    
    
class Product(db.Model, SerializerMixin):
    __tablename__ = "products"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    category = db.Column(db.String)
    condition = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Float)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #cart_items = db.relationship('Cartitem', backref='product', cascade='all')
    
    #serlize_only = (id, name, image, category, condition, description, price, user_id, created_at, updated_at)
    
    
    def __repr__(self):
        return f'<Product {self.id}'
    
    
class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    body = db.Column(db.String)
    cart_item_id = db.Column(db.Integer, db.ForeignKey('cartitems.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    cart_items = db.relationship('Cartitem', backref='review')
    products = association_proxy('cart_items', 'product')
    
    
    def __repr__(self):
        return f'<Review {self.id}'