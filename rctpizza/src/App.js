import './scss/app.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

// useEffect(() 
//   fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => setPizzas(json.pizzas))}, [])
//   axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas))

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  )
}

export default App;
