import "boxicons/css/boxicons.min.css";
import "./theme/main.css";
import Main from "./pages/Main";
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>

                <Main/>

        </BrowserRouter>
    );
}

export default App;
