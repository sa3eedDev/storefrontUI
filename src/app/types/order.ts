import { cartItem } from "./cart"

type order = {
    id: number
    name: string
    address: string
    cart: cartItem[]
    total: number
}

export {order}