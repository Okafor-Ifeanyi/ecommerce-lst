import { ProductItem } from "./ProductItem"
import styles from "./Product.module.css"
import { useGetProductsQuery } from "../../services/dummyJsonApi";
import type { Product } from "../../types";
import { calculateDiscountedPrice } from "../../lib/helper";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import { incrementSkip } from "../../state/LoadProduct/skipSlice";
import { LoaderIcon } from "../../assets/svg/Icons";

export const ProductSection = () => {
    const dispatch = useDispatch();
    const skip = useSelector((state: RootState) => state.skip.value);

    const { data: productJson, error, isLoading, isFetching } = useGetProductsQuery(skip);

    let products: Product[] = productJson?.products || [];

    const handleLoadMore = () => {
        dispatch(incrementSkip());
    };
    if (isLoading && !isFetching) {
        return (
            <section className={styles.productSection}>
                <div className={styles.productWrapper}>
                    <article className={styles.description}>
                        <h1 className={styles.HeaderGray}>Featured Products</h1>
                        <h1 className={styles.HeaderMain}>BESTSELLER PRODUCTS</h1>
                        <p className={styles.HeaderGray}>Problems trying to resolve the conflict between </p>
                    </article>
                    <div className={styles.LoaderContainer}>
                        <LoaderIcon width={50} height={50} />
                    </div>
                </div>
            </section>
        );
    }

    const renderButtonContent = () => {
        if (isFetching) {
            return <LoaderIcon width={20} height={20} />;
        }

        if (error) {
            return <input
                type="button"
                className={styles.ErrorButton}
                value="Retry"
                onClick={handleLoadMore}
            />;
        }

        return "LOAD MORE PRODUCTS";
    };

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
                        imageSrc={product.images[0]}
                        imageAlt={product.title}
                        title={product.title}
                        description={product.description}
                        oldPrice={product.price.toString()}
                        newPrice={calculateDiscountedPrice(product.price, product.discountPercentage).toString()}
                        />
                    ))}
                </main>

                <button 
                    className={styles.LoadProducts} 
                    onClick={() => dispatch(incrementSkip())}
                    disabled={isFetching}
                >
                    {renderButtonContent()}
                </button>
            </div>
        </section>
    )
}