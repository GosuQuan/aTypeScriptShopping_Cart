import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/item.json";
type ShoppingCartProps = {
  isOpen: boolean;
};
export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item=>(
                    <CartItem key={item.id} {...item}/>
                ))}
                <div className="ms-auto fw-auto fs-5">
                    Total {formatCurrency(cartItems.reduce((total,cartItem)=>{
                        const item = storeItems.find(item=>item.id===cartItem.id)
                        return total+(item?.price||0) *cartItem.quantity
                    },0))}
                </div>
            </Stack>
        </Offcanvas.Body>
      </Offcanvas.Header>
    </Offcanvas>
  );
};
