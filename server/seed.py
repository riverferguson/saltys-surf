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



        cart1 = Cartitem(quantity=1, product_id=1, user_id=1)
        cart2 = Cartitem(quantity=1, product_id=2, user_id=1)
        cart3 = Cartitem(quantity=1, product_id=3, user_id=1)
        cart4 = Cartitem(quantity=1, product_id=4, user_id=1)
        cart5 = Cartitem(quantity=1, product_id=5, user_id=3)

        items = [cart1, cart2, cart3, cart4, cart5]
        db.session.add_all(items)
        db.session.commit()




        p1 = Product(name='G Skate', image='https://cisurfboards.com/cdn/shop/products/GSkate_Blue_Deck.png?v=1678850127', category='The G Skate has a lot of get up and go speed thanks to its light single to double concave, low entry rocker, wide point forward—and its contemporary shortboard rails provide all the precision and control you could ever want', condition='new', description='surfboard', price=750.00)
        p2 = Product(name='Chancho', image='https://cisurfboards.com/cdn/shop/products/chancho-deck-shape-3d-mock-up-white.png?v=1619468905', category='surfboard', condition='used', description='Whether new to surfing or just looking to enjoy a cruisy session, the all-new Chancho is a super user-friendly, stable board that catches waves with ease. The Chancho boasts generous volume for its mid length size, and features low nose rocker for early wave entry. Its subtle vee-bottom contours that run through the fins help it turn effortlessly.', price=500.00)
        p3 = Product(name='FCS Fins', image='https://www.surffcs.com/cdn/shop/products/FCSII_PERFORMER_ECONEO_TRI_900x.jpg?v=1678403074', category='fins', condition='new', description='These fins feature a sleek and aerodynamic design, minimizing drag and maximizing efficiency. With their innovative technology and superior materials, they offer enhanced grip and traction, empowering you to execute sharp turns and maintain control even in challenging conditions', price=75.00)
        p4 = Product(name='FCS Leash', image='https://www.surffcs.com/cdn/shop/products/FCS_HELIX_BLUE_COMP_HERO_900x.jpg?v=1628138549', category='leash', condition='used', description='leash', price=25.00)
        p5 = Product(name='Twin Fin', image='https://cisurfboards.com/cdn/shop/products/twinfin_deck1.png?v=1619470339', category='surfboard', condition='used', description='An amazing and fun twin fin CI board waiting for an owner ready to tackle some fine waves.', price=700.00)

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