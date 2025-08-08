import { Routes, Route } from 'react-router-dom';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import Welcome from '../components/Welcome';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}