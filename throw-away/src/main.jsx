import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import DashboardPage from "./pages/DashboardPage.jsx"
import PostsPage from "./pages/PostsPage.jsx"
import FeedPage from "./pages/FeedPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ReviewPage from './pages/ReviewPage.jsx'

//Always add import and add new route to browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <DashboardPage/>,
  },
  {
    path: "posts",
    element: <PostsPage/>,
  },
  {
    path: "feed",
    element: <FeedPage/>,
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "reviews",
    element: <ReviewPage/>,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
