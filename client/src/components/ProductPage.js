import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import { Grid, Menu, Button } from 'semantic-ui-react'


const ProductPage = ({products, handleFilter, user, addReviewToProduct}) => {
const [ category, setCategory ] = useState('all')  
const [filteredItems, setFilteredItems] = useState(products)

useEffect(() => {
  const filtered = products.filter(product => {
    if (category === 'all') {
      return true;
    } else {
      return product.category === category;
    }
  });
  setFilteredItems(filtered);
}, [products, category]);



// const filteredProducts = (value) => {
//   if (value === 'all') {
//     setFilterItems(filteredItems)
//     return
//   }
//   let items = filteredItems.filter(product => {
//     return product.category === value
//   })
//   setFilterItems(items)
// }



  return (
    <div className='product-page'>
    <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='All'
              value='all'
              onClick={(e) => setCategory(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Surfboards'
              value='surfboard'
              onClick={(e) => setCategory(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Fins'
              value='fins'
              onClick={(e) => setCategory(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Leashes'
              value='leash'
              onClick={(e) => setCategory(e.target.getAttribute('value'))}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Grid columns={2} stackable>
            { filteredItems.map(product => (
              <Grid.Column key={product.id} computer={8} tablet={16} mobile={16}>
                <ProductCard key={product.id} product={product} user={user} addReviewToProduct={addReviewToProduct}/>
              </Grid.Column>
            )) }
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  )
}


export default ProductPage