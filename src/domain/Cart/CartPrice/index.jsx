import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegCreditCard  } from 'react-icons/fa';
import { useToasts } from 'react-toast-notifications'
import Button  from 'components/Button';
import { Coupon } from 'domain/Cart/Coupon';
import './style.scss';


export const CartPrice = () => {
    
    const { 
        prices,
        products,
    } = useSelector(state => state.cart)

    const { addToast } = useToasts()

    const {
        initialPrice,
        couponPrice,
        finalPrice,
    } = prices 

    const handleClick = () => addToast('Thanh toán thành công, cảm ơn quý khách', { appearance: 'info' })

    return (

        <div className="cart-price">
            <h3>Giá thanh toán</h3>

            <dl>
                <dt>Giá ban đầu</dt>
                <dd>${initialPrice.toLocaleString()}USD</dd>
            </dl>

            <Coupon />

            {couponPrice > 0 && (
                <dl>
                    <dt>Mã giảm giá</dt>
                    <dd><b>-{couponPrice.toLocaleString()}</b></dd>
                </dl>
            )}

            <dl className="total">
                <dt>Tổng tiền</dt>
                <dd>${finalPrice.toLocaleString()}USD</dd>
            </dl>

            {!products || !products.length ? '' :  (
                <Button 
                    block 
                    className="checkout-button"
                    onClick={handleClick}
                >
                    <FaRegCreditCard /> Tiến hành thanh toán
                </Button>
            )}
        </div>

    );
}

export default CartPrice;
