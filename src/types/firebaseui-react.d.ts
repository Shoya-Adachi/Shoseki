import { Auth } from "firebase/auth";
import * as firebaseui from "firebaseui";

declare module "firebaseui-react" {
  import * as React from "react";

  interface StyledFirebaseAuthProps {
    uiConfig: firebaseui.auth.Config;
    auth: Auth;
  }

  const StyledFirebaseAuth: React.FC<StyledFirebaseAuthProps>;

  export default StyledFirebaseAuth;
}
