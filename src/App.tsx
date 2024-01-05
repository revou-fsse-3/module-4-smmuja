
import './App.css';
import { HomeContainer, RegisterContainer, LoginContainer, Page404Container} from './containers';
import ProtectLayout from './layouts/ProtectLayout';
// import {List } from './containers/Category'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayouts';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import List from './containers/Category/List'
import Edit from './containers/Category/Edit'
import Add from './containers/Category/Add'



function App() {

  const router = createBrowserRouter ([
    {
      element: <PublicLayout />,
      children : [
        {
          path: '/',
          element: <HomeContainer />
        },
        {
          path: '/register',
          element: <RegisterContainer />
        },
        {
          path: '/login',
          element: <LoginContainer />
        },
      ]
    },
    {
      path : '*',
      element: <Page404Container />
    },
    {
      element : <ProtectLayout />,
      children: [
        {
          path: '/list',
          element: <List />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/Edit',
          element: <Edit />
        },
      ]
    }
  ])

  return (
    <div className='app'>
      <RouterProvider router={router}/>



    {/* <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<HomeContainer />}/>
          <Route path='/about' element={<AboutContainer />}/>
          <Route path='/contact' element={<ContactContainer />}/>
        </Route>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter> */}
    </div>

    // <div className='app'>
    //   <HomeContainer />
    // </div>
  )
}

export default App
