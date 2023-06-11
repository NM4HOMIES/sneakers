function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer-header d-flex justify-between">
          <h2 className="overlay-title">Корзина</h2>
          <img
            className="button-remove cu-p"
            width={32}
            height={32}
            src="/img/remove.svg"
            alt="remove"
          />
        </div>

        <div className="cartList">
          <div className="cartItem d-flex align-center">
            <img
              width={70}
              height="70"
              src="/img/catalog/catalog-1.jpg"
              alt="sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="button-remove"
              width={32}
              height={32}
              src="/img/remove.svg"
              alt="remove"
            />
          </div>

          <div className="cartItem d-flex align-center">
            <img
              width={70}
              height="70"
              src="/img/catalog/catalog-2.jpg"
              alt="sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8 499 руб.</b>
            </div>
            <img
              className="button-remove"
              width={32}
              height={32}
              src="/img/remove.svg"
              alt="remove"
            />
          </div>
        </div>

        <div className="total">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
        <button className="orderButton">
          Оформить заказ
          <img
            width={14}
            height={12}
            src="/img/arrow.svg"
            alt="Стрелка вправо"
          />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
