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
import { useSelector } from "react-redux";
import { EMPTY_STRING } from "../../constants/common";

const Routes = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Leader Board",
    key: "leader-board",
  },
  {
    label: "New",
    key: "create-poll",
  },
];

const MainLayout = () => {
  const navigate = useNavigate();
  const route = useLocation();

  const { user } = useSelector((state) => state.auth);

  return (
    <MainLayoutContainerStyled>
      <Tabs
        tabBarExtraContent={
          <ExtraContentRightContainerStyled>
            <UserInfoContainerStyled>
              <AvatarStyled
                src={user?.avatarURL ?? ""}
                alt={user?.name || EMPTY_STRING}
              />{" "}
              {user?.name || EMPTY_STRING}
            </UserInfoContainerStyled>
            <LogoutButtonStyled
              onClick={
                () => console.log("Signout")
                // auth.signout(() => navigate("/login", { replace: true }))
              }
            >
              Logout
            </LogoutButtonStyled>
          </ExtraContentRightContainerStyled>
        }
        items={Routes}
        defaultActiveKey={
          {
            [PATH_NAME.HOME]: "home",
            [PATH_NAME.LEADER_BOARD]: "leaderboard",
            [PATH_NAME.CREATE_POLL]: "add",
          }[route.pathname]
        }
        defaultValue={
          {
            [PATH_NAME.HOME]: "home",
            [PATH_NAME.LEADER_BOARD]: "leaderboard",
            [PATH_NAME.CREATE_POLL]: "add",
          }[route.pathname]
        }
        activeKey={
          {
            [PATH_NAME.HOME]: "home",
            [PATH_NAME.LEADER_BOARD]: "leaderboard",
            [PATH_NAME.CREATE_POLL]: "add",
          }[route.pathname]
            ? {
                [PATH_NAME.HOME]: "home",
                [PATH_NAME.LEADER_BOARD]: "leaderboard",
                [PATH_NAME.CREATE_POLL]: "add",
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
