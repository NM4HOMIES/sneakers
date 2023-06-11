import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div class="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        
{/* Карточки товара */}
        <div className="d-flex">

          <Card />
          <div className="card">
          <div className="favortie">
              <img width={32} height={32} src="../img/unlike.svg" />
            </div>
            <img width={133} height={112} src="../img/catalog/catalog-1.jpg" />
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

          <div className="card">
            <div className="favortie">
              <img width={32} height={32} src="../img/unlike.svg" />
            </div>
            <img width={133} height={112} src="../img/catalog/catalog-3.jpg" />
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

          <div className="card">
          <div className="favortie">
              <img width={32} height={32} src="../img/unlike.svg" />
            </div>
            <img width={133} height={112} src="../img/catalog/catalog-4.jpg" />
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
          
        </div>
      </div>
    </div>
  );
}

export default App;
