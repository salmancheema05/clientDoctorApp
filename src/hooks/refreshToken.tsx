import { useAppDispatch, useAppSelector } from "./dispatchAndSelector";
import { userData, userDataSelector } from "../redux/AuthSlice";
import { useRefreshTokenMutation } from "../api/userLogin";
import { UserDataType } from "../types/authType";

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector(userDataSelector);
  const [refreshToken] = useRefreshTokenMutation();

  const refreshtoken = async () => {
    const refreshtoken = { refreshtoken: userAuth.authReducer.refresh_token };
    const res = await refreshToken(refreshtoken);

    const updateToken: UserDataType = {
      id: userAuth.authReducer.id,
      first_name: userAuth.authReducer.first_name,
      last_name: userAuth.authReducer.last_name,
      user_status: userAuth.authReducer.user_status,
      token: res.data.message,
      refresh_token: userAuth.authReducer.refresh_token,
    };
    dispatch(userData(updateToken));
  };
  return { refreshtoken };
};

export default useRefreshToken;
