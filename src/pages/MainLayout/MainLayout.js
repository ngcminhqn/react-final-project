import { Tabs } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AvatarStyled,
  ExtraContentRightContainerStyled,
  LogoutButtonStyled,
  MainLayoutContainerStyled,
  UserInfoContainerStyled,
} from "./MainLayout.styled";
import { PATH_NAME } from "../../constants/pathName";
import { useDispatch } from "react-redux";
import { EMPTY_STRING } from "../../constants/common";
import { authActions } from "../../features/auth/authSlice";
import { clearUser, getUser } from "../../helpers/user";

const TAB_KEYS = {
  HOME: "home",
  LEADER_BOARD: "leaderboard",
  CREATE_POLL: "add",
};

const ROUTES = [
  {
    label: "Home",
    key: TAB_KEYS.HOME,
  },
  {
    label: "Leader Board",
    key: TAB_KEYS.LEADER_BOARD,
  },
  {
    label: "New",
    key: TAB_KEYS.CREATE_POLL,
  },
];

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const route = useLocation();

  const user = getUser();

  const handleLogout = () => {
    dispatch(authActions.handleLogout());
    navigate(PATH_NAME.LOGIN, { replace: true });
    clearUser();
  };

  return (
    <MainLayoutContainerStyled>
      <Tabs
        tabBarExtraContent={
          <ExtraContentRightContainerStyled>
            <UserInfoContainerStyled>
              <AvatarStyled
                src={user?.avatarURL ?? ""}
                alt={user?.name || EMPTY_STRING}
              />
              {user?.name || EMPTY_STRING}
            </UserInfoContainerStyled>
            <LogoutButtonStyled onClick={handleLogout}>
              Logout
            </LogoutButtonStyled>
          </ExtraContentRightContainerStyled>
        }
        items={ROUTES}
        defaultActiveKey={
          {
            [PATH_NAME.HOME]: TAB_KEYS.HOME,
            [PATH_NAME.LEADER_BOARD]: TAB_KEYS.LEADER_BOARD,
            [PATH_NAME.CREATE_POLL]: TAB_KEYS.CREATE_POLL,
          }[route.pathname]
        }
        defaultValue={
          {
            [PATH_NAME.HOME]: TAB_KEYS.HOME,
            [PATH_NAME.LEADER_BOARD]: TAB_KEYS.LEADER_BOARD,
            [PATH_NAME.CREATE_POLL]: TAB_KEYS.CREATE_POLL,
          }[route.pathname]
        }
        activeKey={
          {
            [PATH_NAME.HOME]: TAB_KEYS.HOME,
            [PATH_NAME.LEADER_BOARD]: TAB_KEYS.LEADER_BOARD,
            [PATH_NAME.CREATE_POLL]: TAB_KEYS.CREATE_POLL,
          }[route.pathname]
            ? {
                [PATH_NAME.HOME]: TAB_KEYS.HOME,
                [PATH_NAME.LEADER_BOARD]: TAB_KEYS.LEADER_BOARD,
                [PATH_NAME.CREATE_POLL]: TAB_KEYS.CREATE_POLL,
              }[route.pathname]
            : "/error"
        }
        onChange={(e) => navigate(e === "home" ? "/" : e)}
      />
      <Outlet />
    </MainLayoutContainerStyled>
  );
};

export default MainLayout;
