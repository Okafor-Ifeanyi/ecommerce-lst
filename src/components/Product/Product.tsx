import { ProductItem } from "./ProductItem"
import styles from "./Product.module.css"

export const ProductSection = () => {
    const products = [
        {
            imageSrc: "/images/product-cover-5.png",
            imageAlt: "Product 1",
            title: "Product 1",
            description: "Description for Product 1",
            oldPrice: "$100.00",
            newPrice: "$80.00",
        },
        {
            imageSrc: "/images/product-cover-5.png",
            imageAlt: "Product 2",
            title: "Product 2",
            description: "Description for Product 2",
            oldPrice: "$120.00",
            newPrice: "$90.00",
        },
        {
            imageSrc: "/images/product-cover-5.png",
            imageAlt: "Product 3",
            title: "Product 3",
            description: "Description for Product 3",
            oldPrice: "$150.00",
            newPrice: "$110.00",
        },
        {
            imageSrc: "/images/product-cover-5.png",
            imageAlt: "Graphic Design",
            title: "Graphic Design",
            description: "English Department",
            oldPrice: "$20.00",
            newPrice: "$16.48"
          },
          {
            imageSrc: "/images/product-cover-5.png",
            imageAlt: "UI/UX Design",
            title: "UI/UX Design",
            description: "Design School",
            oldPrice: "$25.00",
            newPrice: "$19.99"
          },
          {
            imageSrc: "/images/product-cover-5.png",
            imageAlt: "Web Development",
            title: "Web Development",
            description: "Tech Department",
            oldPrice: "$30.00",
            newPrice: "$22.50"
          }
    ]

    return (
        <section className={styles.productSection}>
            <div className={styles.productWrapper}>
                <article className={styles.description}>
                    <h1 className={styles.HeaderGray}>Featured Products</h1>
                    <h1 className={styles.HeaderMain}>BESTSELLER PRODUCTS</h1>
                    <p className={styles.HeaderGray}>Problems trying to resolve the conflict between </p>
                </article>

                <main className={styles.ItemWrapper}>
                    {products.map((product, index) => (
                        <ProductItem
                        key={index}
                        imageSrc={product.imageSrc}
                        imageAlt={product.imageAlt}
                        title={product.title}
                        description={product.description}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        />
                    ))}
                </main>

                <button className={styles.LoadProducts}>
                    LOAD MORE PRODUCTS
                </button>
            </div>
        </section>
    )
}