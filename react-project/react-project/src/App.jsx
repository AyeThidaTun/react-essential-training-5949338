import './App.css'
// let language = "JavaScript";
// let emoji = "🌞";
function Header({name, year})
{
  // console.log(props);
  return(
    <header>
      <h1>{name}'s Kitchen</h1>
      <h5>Copyright {year}</h5>
    </header>
  )
}
function App() {

  return (
    <div>
      <Header name="Anna" year={new Date().getFullYear()}/>
      <main>
        <h2>We serve the most delicious food around.</h2>
      </main>
    </div>
    
  )
}

export default App
