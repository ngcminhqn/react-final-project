import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { PATH_NAME } from "../constants/pathName";
import LeaderBoardPage from "../pages/LeaderBoardPage/LeaderBoardPage";
import PollPage from "../pages/PollPage/PollPage";
import MainLayout from "../pages/MainLayout/MainLayout";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={PATH_NAME.LOGIN} replace />;
  }
  return children;
};

export const router = createBrowserRouter([
  {
    path: PATH_NAME.HOME,
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/leader-board",
        element: <LeaderBoardPage />,
      },
      // {
      //   path: 'create-poll',
      //   element: <New />,
      // },
      {
        path: "poll/:questionId",
        element: <PollPage />,
      },
    ],
  },
  {
    path: PATH_NAME.LEADER_BOARD,
    element: <LeaderBoardPage />,
  },
  {
    path: PATH_NAME.POLL,
    element: <PollPage />,
  },
  {
    path: PATH_NAME.LOGIN,
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
