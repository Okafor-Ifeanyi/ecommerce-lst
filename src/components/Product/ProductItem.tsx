import styles from "./Product.module.css"

type ProductItemProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    oldPrice: string;
    newPrice: string;
  };
  
  export const ProductItem = ({
    imageSrc,
    imageAlt,
    title,
    description,
    oldPrice,
    newPrice,
  }: ProductItemProps) => {
    return (
      <article className={styles.Item}>
        <div className={styles.ItemImageBox}>
          <img src={imageSrc} alt={imageAlt} className={styles.ItemImage} />
        </div>
        <h1><b>{title}</b></h1>
        <p>{description}</p>
        <p>
          <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>
            {oldPrice}
          </span>
          <span className={styles.Price}>{newPrice}</span>
        </p>
      </article>
    );
  };