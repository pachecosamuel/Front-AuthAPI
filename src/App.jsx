import { Root } from './routes/root'
import "./css/global.css";
import "./css/css-config/reset.css";
import { AuthenticationProvider } from './Services/Context/contextToken';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <AuthenticationProvider>
            <ToastContainer
                position='top-right'
                hideProgressBar
                theme='colored'
            />
            <Root />
        </AuthenticationProvider>
    )
}

export default App
