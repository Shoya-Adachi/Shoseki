import "firebaseui/dist/firebaseui.css";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { IoLogoGoogle } from "react-icons/io";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../auth/firebase";
import { Divider } from "@mui/material";
import { useReducer } from "react";
import { useNavigate } from "@tanstack/react-router";

type State = {
  mail: string;
  password: string;
  error: boolean;
};

type Action =
  | { type: "SET_MAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_ERROR"; payload: boolean }
  | { type: "RESET" };

export const LoginScreen = () => {
  const navigate = useNavigate();
  const initialState = {
    mail: "",
    password: "",
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "SET_MAIL":
        return { ...state, mail: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }

  // Googleアカウントを使用してログイン
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate({ to: "/home", replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  // メールアドレスとパスワードでのログイン処理
  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, state.mail, state.password);

      navigate({ to: "/home", replace: true });
    } catch (error) {
      console.error(error);
      dispatch({ type: "SET_ERROR", payload: true });
    }
  };

  return (
    <Box
      sx={{
        width: "100wh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#1976d2",
      }}
    >
      <Paper elevation={24}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Box sx={{ paddingX: "50px" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ログイン
            </Typography>
            <Divider sx={{ marginY: "10px" }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                サインインするには:
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <IoLogoGoogle
                  style={{
                    color: "#1976D2",
                    cursor: "pointer",
                  }}
                  size={26}
                  onClick={signInwithGoogle}
                />
              </Box>

              <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                または
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              marginY: "25px",
              paddingX: "30px",
            }}
          >
            <TextField
              label="メールアドレス"
              variant="outlined"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              onChange={(e) =>
                dispatch({ type: "SET_MAIL", payload: e.target.value })
              }
              sx={{
                width: "300px",
                "& .MuiInputBase-root": {
                  height: 35,
                },
              }}
            />
            <TextField
              label="パスワード"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
              sx={{
                width: "300px",
                "& .MuiInputBase-root": {
                  height: 35,
                },
              }}
            />
            {state.error ? (
              <Typography sx={{ color: "error.main", fontSize: "12px" }}>
                メールアドレスまたはパスワードが正しくありません。
              </Typography>
            ) : (
              <></>
            )}
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleSubmit}
            >
              サインイン
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <Typography sx={{ fontSize: "12px", alignContent: "center" }}>
              アカウントをお持ちでない方
            </Typography>
            <Button variant="text" onClick={() => navigate({ to: "/signup" })}>
              登録する
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
