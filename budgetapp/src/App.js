import "./App.css";
import Header from './components/Header';
import Card from './components/Budgetcard';


function App() {
  return <div className="App">
    <Header />
    <div className='card-container'>
      <Card name="Food" amount="100" max="1000"></Card>
      <Card name="Entertainment" amount="100" max="1000"></Card>
      <Card name="Games" amount="800" max="1000"></Card>
    </div>
  </div>;
}

export default App;
