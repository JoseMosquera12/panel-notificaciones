import { Container} from "@mui/material";
import "./App.scss";
import "./styles/main.scss";
import NotificationsPanel from "./client/notificationsPanel";

function App() {

  
  return (
    <Container className = "Contenedor"  maxWidth="sm">

    <div className="App">
      <NotificationsPanel />
    </div>
    
    </Container>
  );
}

export default App;
