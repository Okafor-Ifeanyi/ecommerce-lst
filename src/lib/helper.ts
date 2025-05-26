export function calculateDiscountedPrice(price: number, discountPercentage: number): number {
    const discountAmount = (price * discountPercentage) / 100;
    return Number((price - discountAmount).toFixed(2)); // rounded to 2 decimal places
}