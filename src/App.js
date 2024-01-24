import './App.css';
import { Product } from './Product';
import { Welcome } from './Welcome';
import json from './data.json'

function App() {
  let name = "Bavishnu"

  let productList = json
  console.log(productList)


  return (
    <div class="product-data">
     {/* <Welcome nm={name}/> */}
     {/* <Product />  */}

     {productList.map((item) => {
        return (
        <Productlist product = {item} />)
     })
    }
    </div>
  );

  }

function Productlist ({product}) {

  return (
    <div className="card">
     <img src={product.image} alt={product.name} />
     <div>
       <h4> {product.name}</h4>
       <p>{product.description}</p>
       <h4>{product.cost}</h4>
     </div>
    </div>
  )

}

export default App;

