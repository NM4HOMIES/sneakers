function Card() {
  return (
    <div className="card">
      <div className="favortie">
        <img width={32} height={32} src="../img/like.svg" />
      </div>
      <img width={133} height={112} src="../img/catalog/catalog-2.jpg" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/add.svg" />
        </button>
      </div>
    </div>
  );
}

export default Card;
