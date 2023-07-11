import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
import { Grid, Menu, Button } from 'semantic-ui-react'

const ProductPage = ({products, handleFilter, filteredItems, user}) => {
const mappedProducts = products.map(product => <ProductCard key={product.id} product={product}/>)

  return (
    <div>
    <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='All'
              value='all'
              onClick={(e) => handleFilter(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Surfboards'
              value='surfboard'
              onClick={(e) => handleFilter(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Fins'
              value='fin'
              onClick={(e) => handleFilter(e.target.getAttribute('value'))}
            />
            <Menu.Item
              name='Leashes'
              value='leash'
              onClick={(e) => handleFilter(e.target.getAttribute('value'))}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Grid columns={2} stackable>
            { filteredItems.map(item => (
              <Grid.Column key={item.id} computer={8} tablet={16} mobile={16}>
              </Grid.Column>
            )) }
          </Grid>
          {mappedProducts}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default ProductPage