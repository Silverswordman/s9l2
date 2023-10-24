import "./App.css";
// importare il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalNavbar from "./Components/MyNavbar";
import PersonalFooter from "./Components/MyFooter";
import AllTheBooks from "./Components/AllTheBooks";
import Alert from "./Components/AlertWelcome";
function App() {
  return (
    <div className="App">
      <PersonalNavbar />
      <Alert />
      <main>
        <AllTheBooks />
      </main>
      <PersonalFooter />
    </div>
  );
}

export default App;
