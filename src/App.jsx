import { Root } from './routes/root'
import "./css/global.css";
import "./css/css-config/reset.css";
import { AuthenticationProvider } from './Services/Context/contextToken';
function App() {
    return (
        <AuthenticationProvider>
            <Root />
        </AuthenticationProvider>
    )
}

export default App
