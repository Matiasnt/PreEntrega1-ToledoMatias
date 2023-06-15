
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar} from "./components/NavBar" //importamos el componente navbar

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Muchas Gracias!!!"/>
    </>
  );
}

export default App;
