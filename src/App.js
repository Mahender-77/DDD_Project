
import './App.css';
import { AuthContextProvider } from './context/AuthContextProvider';
import { UserPage } from './pages/UserPage';

function App() {
  return (
    <div className="App">
 <AuthContextProvider>
 <UserPage/>
 </AuthContextProvider>
    
    </div>
  );
}

export default App;
