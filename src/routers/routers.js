import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { PATH_NAME } from "../constants/pathName";
import LeaderBoardPage from "../pages/LeaderBoardPage/LeaderBoardPage";
import PollPage from "../pages/PollPage/PollPage";

export const router = createBrowserRouter([
  {
    path: PATH_NAME.HOME,
    element: <HomePage />,
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
