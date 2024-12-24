import './App.css';
import 'swiper/css';
import Header from './global/components/Header';
import Footer from './global/components/Footer';
import MainContent from './router/MainContent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from './global/components/Loading';
import { port } from './port/config';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice';
import Trailer from './global/modal/Trailer';
import { useNavigate } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`${port.ip}/auth/profile`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          });
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

          dispatch(setUser(response.data.data));
        } catch (error) {
          console.error(error);
          localStorage.removeItem('authToken')
          toast.error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Header />
      <main className="soju-wrapper lg:mt-0">
        <MainContent />

      </main>

      <Footer />
      <Trailer />
    </div>
  );
}

export default App;
