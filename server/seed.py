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




        p1 = Product(name='G Skate', image='https://www.usedsurfboardshawaii.com/wp-content/uploads/2023/07/IMG_2829.jpg', category='surfboard', condition='new', description='The G Skate has a lot of get up and go speed thanks to its light single to double concave, low entry rocker, wide point forward—and its contemporary shortboard rails provide all the precision and control you could ever want.', price=750.00)
        p2 = Product(name='Chancho', image='https://www.usedsurfboardshawaii.com/wp-content/uploads/2023/07/IMG_2849.jpg', category='surfboard', condition='used', description='Whether new to surfing or just looking to enjoy a cruisy session, the all-new Chancho is a super user-friendly, stable board that catches waves with ease. The Chancho boasts generous volume for its mid-length size and features low nose rocker for early wave entry. Its subtle vee-bottom contours that run through the fins help it turn effortlessly.', price=500.00)
        p3 = Product(name='FCS Fins', image='https://www.surffcs.com/cdn/shop/products/FCSII_PERFORMER_ECONEO_TRI_900x.jpg?v=1678403074', category='fins', condition='new', description='These fins feature a sleek and aerodynamic design, minimizing drag and maximizing efficiency. With their innovative technology and superior materials, they offer enhanced grip and traction, empowering you to execute sharp turns and maintain control even in challenging conditions.', price=75.00)
        p4 = Product(name='FCS Leash', image='https://www.surffcs.com/cdn/shop/products/FCS_HELIX_BLUE_COMP_HERO_900x.jpg?v=1628138549', category='leash', condition='used', description='This high-quality FCS leash is designed for ultimate performance and durability. Its comfortable cuff and reliable swivel system ensure maximum freedom of movement, while the strong cord and secure attachment provide excellent strength and safety.', price=25.00)
        p5 = Product(name='Twin Fin', image='https://cisurfboards.com/cdn/shop/products/twinfin_deck1.png?v=1619470339', category='surfboard', condition='used', description='An amazing and fun twin fin CI board waiting for an owner ready to tackle some fine waves.', price=700.00)
        p6 = Product(name='Premium Leash', image='https://example.com/leash1.png', category='leash', condition='new', description='This premium leash offers the perfect balance between strength and flexibility. Its innovative design and high-quality materials ensure maximum durability and minimal tangling, allowing you to focus on riding the waves with confidence.', price=35.00)
        p7 = Product(name='Performance Fin Set', image='https://example.com/fins1.png', category='fins', condition='new', description='Designed for advanced surfers seeking optimal performance, this fin set combines speed, control, and maneuverability. Crafted from lightweight and responsive materials, these fins enhance your surfing experience and help you push your limits.', price=90.00)
        p8 = Product(name='Longboard', image='https://example.com/surfboard1.png', category='surfboard', condition='new', description='Ideal for those seeking a smooth and graceful ride, this longboard combines classic design with modern performance. Its generous width and gentle rocker provide stability and easy wave-catching ability, making it perfect for beginners and experienced riders alike.', price=950.00)
        p9 = Product(name='Shortboard', image='https://example.com/surfboard2.png', category='surfboard', condition='used', description='Designed for high-performance surfing, this shortboard is built to excel in critical waves. Its refined shape, responsive feel, and precision maneuverability allow you to carve the face and perform powerful turns with confidence.', price=550.00)
        p10 = Product(name='Quad Fin Set', image='https://example.com/fins2.png', category='fins', condition='new', description='Unlock the full potential of your board with this quad fin set. Featuring a combination of drive and speed, these fins provide excellent hold and control, allowing you to generate maximum power and execute explosive maneuvers.', price=85.00)

        p11 = Product(name='Pro Leash', image='https://example.com/leash2.png', category='leash', condition='new', description='Built for professional surfers, this leash delivers unrivaled strength, performance, and comfort. Its advanced features, such as a quick-release system and adjustable cuff, ensure maximum safety and freedom of movement, enabling you to focus on riding waves at the highest level.', price=40.00)
        p12 = Product(name='Fish Surfboard', image='https://example.com/surfboard3.png', category='surfboard', condition='used', description='Experience the speed and flow of a fish surfboard. Its wider outline, swallowtail, and low rocker allow for effortless paddling, increased wave-catching ability, and smooth turns. Whether you are a seasoned rider or a beginner looking for a versatile board, this fish surfboard won\'t disappoint.', price=600.00)
        p13 = Product(name='Tri Fin Set', image='https://example.com/fins3.png', category='fins', condition='new', description='Upgrade your board with this tri fin set. Its balanced template and medium flex provide a combination of speed, maneuverability, and control. Whether you enjoy carving turns or racing down the line, these fins offer the versatility you need for a variety of conditions.', price=70.00)
        p14 = Product(name='Performance Leash', image='https://example.com/leash3.png', category='leash', condition='new', description='This performance leash is engineered to withstand the demands of high-intensity surfing. Its innovative design minimizes drag, reduces tangling, and ensures reliable strength, allowing you to focus on pushing your limits and taking your surfing to the next level.', price=30.00)
        p15 = Product(name='Mini Malibu', image='https://example.com/surfboard4.png', category='surfboard', condition='new', description='Perfect for surfers of all levels, this mini Malibu offers a stable platform and excellent wave-catching ability. Its generous volume and forgiving outline make it ideal for beginners, while its maneuverability and responsive feel provide excitement for more experienced riders.', price=800.00)
        p16 = Product(name='Thruster Fin Set', image='https://example.com/fins4.png', category='fins', condition='new', description='Optimize your boards performance with this thruster fin set. Known for their versatility and control, these fins deliver speed and drive through turns while maintaining stability. Whether you prefer powerful hacks or smooth cutbacks, these fins will elevate your surfing experience.', price=80.00)
        p17 = Product(name='Waist Leash', image='https://example.com/leash4.png', category='leash', condition='new', description='Experience the freedom of a waist leash. Designed for bodyboarding and kneeboarding, this leash provides a secure attachment without restricting movement. Its comfortable and adjustable waistband ensures a snug fit, so you can ride the waves with confidence.', price=45.00)
        p18 = Product(name='Hybrid Surfboard', image='https://example.com/surfboard5.png', category='surfboard', condition='used', description='Discover the best of both worlds with this hybrid surfboard. Combining the characteristics of a shortboard and a fish, this versatile board offers speed, maneuverability, and wave-catching ability. Whether you want to carve turns or fly down the line, this board will keep you stoked.', price=650.00)
        p19 = Product(name='Twin Keel Fins', image='https://example.com/fins5.png', category='fins', condition='new', description='Embrace the retro style and exceptional speed of twin keel fins. Inspired by classic designs, these fins provide excellent drive and maintain stability in fast, down-the-line surfing. Experience the thrill of sliding across the face of the wave with these unique and eye-catching fins.', price=95.00)
        p20 = Product(name='Comp Leash', image='https://example.com/leash5.png', category='leash', condition='used', description='Designed for competition-level surfing, this leash is lightweight, durable, and performance-driven. Its streamlined design minimizes drag, while its innovative materials and construction ensure optimal strength and reliability. Elevate your competitive game with this high-performance leash.', price=50.00)

        p21 = Product(name='Longboard Fin', image='https://example.com/fins6.png', category='fins', condition='new', description='Enhance the stability and control of your longboard with this specialized fin. Its classic design and versatile performance characteristics make it a perfect match for traditional longboards. Whether you prefer cruising or nose riding, this fin will optimize your board\'s capabilities.', price=65.00)
        p22 = Product(name='Travel Leash', image='https://example.com/leash6.png', category='leash', condition='new', description='Designed with travel in mind, this leash offers compactness, versatility, and durability. Its innovative coiling system and lightweight materials ensure easy packing and hassle-free transportation. Wherever your surfing adventures take you, this travel leash will be your reliable companion.', price=55.00)
        p23 = Product(name='Step-up Surfboard', image='https://example.com/surfboard6.png', category='surfboard', condition='new', description='Ready to take on bigger, more challenging waves? This step-up surfboard is designed for serious wave riders. With its increased length, refined outline, and additional rocker, it provides the control and confidence needed to charge powerful surf. Elevate your big wave game with this high-performance board.', price=850.00)
        p24 = Product(name='Quad Rear Fins', image='https://example.com/fins7.png', category='fins', condition='new', description='Complete your quad fin setup with these rear fins. Crafted for speed and maneuverability, these fins provide excellent drive and control, allowing you to carve tight turns and maintain speed through critical sections. Unleash the full potential of your quad setup with these high-performance rear fins.', price=40.00)
        p25 = Product(name='Fish Keel Fins', image='https://example.com/fins8.png', category='fins', condition='new', description='Designed specifically for fish surfboards, these keel fins deliver speed, stability, and a classic feel. Their wider base and minimal sweep provide exceptional drive and hold, allowing you to generate maximum speed and flow down the line. Whether you\'re riding small or medium-sized waves, these fins will enhance your fish surfboard.', price=80.00)
        p26 = Product(name='Beginner Leash', image='https://example.com/leash7.png', category='leash', condition='new', description='Start your surfing journey with confidence using this beginner leash. Designed for entry-level riders, it offers a comfortable cuff, easy attachment, and reliable strength. Enjoy the freedom to learn and progress while keeping your board securely connected.', price=20.00)
        p27 = Product(name='Epoxy Surfboard', image='https://example.com/surfboard7.png', category='surfboard', condition='new', description='Experience the lightweight and durable performance of an epoxy surfboard. With its enhanced strength and responsiveness, this board allows for increased maneuverability and improved speed. Whether you\'re a beginner or an advanced rider, this epoxy surfboard will elevate your surfing experience.', price=780.00)
        p28 = Product(name='Big Wave Leash', image='https://example.com/leash8.png', category='leash', condition='new', description='Designed to handle the power and force of big wave surfing, this leash is built for extreme conditions. Its heavy-duty construction, reinforced components, and exceptional strength ensure reliability and safety in challenging situations. Trust this big wave leash to keep you connected to your board when it matters most.', price=60.00)
        p29 = Product(name='Performance Fish', image='https://example.com/surfboard8.png', category='surfboard', condition='used', description='Experience the speed and maneuverability of a performance fish surfboard. With its refined shape, responsive feel, and versatile performance, this board excels in a variety of wave conditions. Whether you\'re slashing turns or generating speed down the line, this performance fish will exceed your expectations.', price=620.00)
        p30 = Product(name='Longboard Leash', image='https://example.com/leash9.png', category='leash', condition='new', description='Keep your longboard close at hand with this reliable and durable longboard leash. Its longer length and thicker cord provide maximum security and minimal drag, while its comfortable ankle cuff ensures a snug fit. Enjoy the freedom to ride with confidence and style.', price=30.00)

        products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
        p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
        p21, p22, p23, p24, p25, p26, p27, p28, p29, p30]

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