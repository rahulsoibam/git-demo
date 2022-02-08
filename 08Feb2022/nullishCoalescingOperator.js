const calculatePrice = (price, discountRate) => {
    price = price || 0;

    if (discountRate == null) {
        // Same as: if (discountRate === null || discountRate === undefined)
        discountRate = discountRate || 0.1; // Default discount rate
    }

    return price - price * discountRate;
};

console.log(calculatePrice(100, 0.1));

console.log(calculatePrice(100));

console.log(calculatePrice(100, 0));

console.log(calculatePrice(100));

const newOperatorCalculatePrice = (price, discountRate) => {
    price = price ?? 0;

    discountRate = discountRate ?? 0.1;

    return price - price * discountRate;
};

console.log(newOperatorCalculatePrice(100, 0)); // This gives 90 in the naive version

console.log(newOperatorCalculatePrice(100, null));

console.log(newOperatorCalculatePrice(100));

console.log(newOperatorCalculatePrice(100));
