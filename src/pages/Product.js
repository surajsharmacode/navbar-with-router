import React from 'react'
import { Link } from 'react-router-dom';
const PRODUCTS=[
    {
        id: 'p1',title: 'product 1'
    },
    {
        id: 'p2',title: 'product 2'
    },
    {
        id: 'p3',title: 'product 3'
    }
]

const Product = () => {
  return (
    <div>
      <h1>Products Page</h1>
     <ul>
        {PRODUCTS.map((item)=>
            <li key={item.id}>
                <Link to={item.id}>{item.title}</Link>
            </li>
        )}
     </ul>
      
    </div>
  )
}

export default Product
