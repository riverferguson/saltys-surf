import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ProductCard = ({product, user}) => {
const { name, image, category, condition, description, price} = product
const [reviewText, setReviewText] = useState("")
const [reviewList, setReviewList] = useState([]);

const Review = ({reviewBody}) => {
  return (
    <>
      <p>{reviewBody}</p>
    </>
  )
}

const ReviewList = () => {
  reviewList.map((reviewBody) => {
    return <Review reviewBody={reviewBody.body} />
  })
}

const addToCart = (e) => {

  e.target.innerText = "Item added";


    fetch('/cartitems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1
        })
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          console.log(data)
          console.log(`Item successfully added to cart.`)
      })
    }
    })  
    setTimeout(() => {
      e.target.innerText = "Add to Cart";
  }, 2000);
}

const submitReview = (e) => {
  
  e.preventDefault();

  if (reviewText.trim() === '') {
    return;
  }

  console.log(`user_id: ${user.id}`)
  console.log(`cart_item_id: ${Object.keys(product)}`)

  fetch('/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      user_id: user.id, 
      body: reviewText, 
      cart_item_id: product.cartitem_id 
    }),
  })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setReviewList(prevList => [...prevList, data])
          setReviewText("")
          console.log('Review successfully added.');
        });
      }
    })
    .catch((error) => {
      console.error('Error adding review:', error);
    });
};
const handleReviewChange = (event) => {
  setReviewText(event.target.value);
};

  return (
    <Container maxWidth="sm">
    <Card sx={{ maxWidth: 345, margin: '80px'}}>
      <CardMedia
        component="img"
        alt={name}
        height="240"
        src={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Condition: {condition}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Category: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: ${price}.00
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">
      </Button>
      <Button sixe="small" onClick={addToCart}> Add To Cart </Button>
      </CardActions>
      <CardActions>
  <form onSubmit={submitReview}>
    <textarea
      value={reviewText}
      onChange={handleReviewChange}
      placeholder="Write a review..."
      rows={4}
      cols={50}
    />
  <Button type="submit">Submit Review</Button>
  <h3>Reviews</h3>
  </form>
  
</CardActions>
  { reviewList.map((review) => (
    <Review reviewBody={review.body} />
  ))}
    </Card>
    </Container>
  );
}


export default ProductCard