#!/usr/bin/env python3

# Standard library imports
from werkzeug.security import generate_password_hash

# Local imports
from config import db, app
from models import User, Product, Cartitem, Review

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        User.query.delete()
        Product.query.delete()
        Cartitem.query.delete()
        Review.query.delete()



        user1 = User(email='user1@gmail.com', username='user1', password=generate_password_hash('12345', method='scrypt'))
        user2 = User(email='user2@gmail.com', username='user2', password=generate_password_hash('12345', method='scrypt'))
        user3 = User(email='user3@gmail.com', username='user3', password=generate_password_hash('12345', method='scrypt'))

        users = [user1, user2, user3]
        db.session.add_all(users)
        db.session.commit()



        cart1 = Cartitem(quantity=1, product_id=1)
        cart2 = Cartitem(quantity=1, product_id=2)
        cart3 = Cartitem(quantity=1, product_id=3)
        cart4 = Cartitem(quantity=1, product_id=4)
        cart5 = Cartitem(quantity=1, product_id=5)

        items = [cart1, cart2, cart3, cart4, cart5]
        db.session.add_all(items)
        db.session.commit()




        p1 = Product(name='Shortboard', image='https://www.usedsurfboardshawaii.com/wp-content/uploads/2023/06/IMG_2705.jpg', category='surfboard', condition='used', description='surfboard', price=500.00)
        p2 = Product(name='longboad', image='https://www.usedsurfboardshawaii.com/wp-content/uploads/2023/07/IMG_2760.jpg', category='surfboard', condition='used', description='surfboard', price=500.00)
        p3 = Product(name='fcs fins', image='https://www.surffcs.com/cdn/shop/products/FCSII_PERFORMER_ECONEO_TRI_900x.jpg?v=1678403074', category='fins', condition='used', description='fins', price=500.00)
        p4 = Product(name='leash', image='https://www.surffcs.com/cdn/shop/products/FCS_HELIX_BLUE_COMP_HERO_900x.jpg?v=1628138549', category='leash', condition='used', description='leash', price=500.00)
        p5 = Product(name='midlength', image='https://www.usedsurfboardshawaii.com/wp-content/uploads/2023/06/IMG_2697.jpg', category='surfboard', condition='used', description='surfboard', price=500.00)

        products = [p1, p2, p3, p4, p5]
        db.session.add_all(products)
        db.session.commit()



        r1 = Review(user_id=1, body='great product', cart_item_id=1)
        r2 = Review(user_id=2, body='great product', cart_item_id=4)
        r3 = Review(user_id=3, body='great product', cart_item_id=3)
        r4 = Review(user_id=2, body='great product', cart_item_id=5)
        r5 = Review(user_id=1, body='great product', cart_item_id=2)

        reviews = [r1, r2, r3, r4, r5]
        db.session.add_all(reviews)
        db.session.commit()

        print('...done seeding data')