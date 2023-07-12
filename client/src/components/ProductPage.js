import React, {useState} from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
import { Grid, Menu, Button } from 'semantic-ui-react'
import { createMuiTheme } from '@mui/material';

const ProductPage = ({products, handleFilter, orderItems, user}) => {
const [filterItems, setFilterItems] = useState(products)




const filteredProducts = (value) => {
  console.log('here', value, products)
  if (value === 'all') {
    setFilterItems(products)
    return
  }
  let items = products.filter(product => {
    return product.category === value
  })
  console.log(items)
  setFilterItems(items)
}



  return (
    <div className='product-page'>
      {console.log("new debugger")}
      {console.log(products)}
    <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='All'
              value='all'
              onClick={(e) => filteredProducts(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Surfboards'
              value='surfboard'
              onClick={(e) => filteredProducts(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Fins'
              value='fins'
              onClick={(e) => filteredProducts(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Leashes'
              value='leash'
              onClick={(e) => filteredProducts(e.target.getAttribute('value'))}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Grid columns={2} stackable>
            { filterItems.map(product => (
              <Grid.Column key={product.id} computer={8} tablet={16} mobile={16}>
                <ProductCard key={product.id} product={product} user={user}/>
              </Grid.Column>
            )) }
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  )
}


export default ProductPage