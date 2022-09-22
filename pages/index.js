import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';

import Products from '../data';

export default function Home() {
  let cartItemNum = Products.length;

  const [numItems, setNumItems] = useState(`(${cartItemNum})`);

  const [products, setProducts] = useState(Products);

  const [quantity, setQuantity] = useState(1);

  const delProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <section className={styles.section}>
      <h1
        style={{
          margin: '0 1rem',
          borderBottom: '2px solid #000',
        }}
      >
        Cart {numItems}
      </h1>
      <hr />

      {products.map((product) => {
        const { name, image, id, seller, size, price, preprice, discount } =
          product;

        return (
          <div key={id}>
            <div className={styles.itemBox}>
              <div className={styles.image}>
                <Image src={image} width={150} height={180} alt={name} />
              </div>
              <div>
                <h2>{name}</h2>
                <p>
                  <span style={{ color: 'gray' }}>Seller: </span> {seller}{' '}
                  <span style={{ color: 'gray' }}> Size: </span> {size}
                </p>

                <p style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
                  JUMIA <span style={{ color: 'red' }}>EXPRESS</span>
                </p>
                <p style={{ color: 'gray' }}>
                  Eligible for free Delivery for orders $80 and above in Accra
                  (Excluding Large items)
                </p>
              </div>

              <div>
                <h3>{price}</h3>
                <p>
                  <span className={styles.preprice}>{preprice}</span>{' '}
                  <span className={styles.discount}>{discount}</span>
                </p>
              </div>
            </div>

            <div className={styles.btns}>
              <button
                className={styles.margin}
                onClick={() => {
                  delProduct(id);
                }}
              >
                REMOVE
              </button>
              <div style={{ display: 'flex', alignItems: 'space-around' }}>
                <button
                  className={styles.margin}
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className={styles.margin}
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <hr style={{ color: 'rgb(226, 224, 222) ' }} />
          </div>
        );
      })}

      <button
        style={{ margin: '0 auto' }}
        onClick={() => {
          setProducts([]);
        }}
      >
        Remove All Products
      </button>
    </section>
  );
}
