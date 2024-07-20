import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fighting from './components/Fighting';
import Layout from './components/Layout';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main/>
      },
      {
        path: '/fighting',
        element: <Fighting/>
      },
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
