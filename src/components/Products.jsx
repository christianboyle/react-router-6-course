import React from 'react'
import { useSearchParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Keyboard',
    price: '150',
    rating: 5
  },
  {
    id: 2,
    name: 'Mouse',
    price: '100',
    rating: 4
  },
  {
    id: 3,
    name: 'Pendrive',
    price: '300',
    rating: 5
  }
]

const Products = () => {
  const [searchParams] = useSearchParams()
  const rating = parseInt(searchParams.get('rating'), 10)
  let filtered = products
  if (rating) {
    filtered = products.filter((product) => product.rating === rating)
  }
  return (
    <ul className='products'>
      {filtered.map(({ id, name, price, rating }) => (
        <li className='product' key={id}>
          <p>Name: {name}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
        </li>
      ))}
    </ul>
  )
}

export default Products
