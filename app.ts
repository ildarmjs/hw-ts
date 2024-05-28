import { TotalPriceParams } from "./types/types";

// #1 TotalPrice 

const totalPrice = ({ price, discount, isInstallment, months }: TotalPriceParams): number => {
	return (price - (price * discount) / 100) / (isInstallment ? months : 1)
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(price)

// ===============================================================================================