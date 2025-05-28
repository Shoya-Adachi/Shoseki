declare module "firebaseui-react" {
  import * as React from "react";

  interface StyledFirebaseAuthProps {
    uiConfig: any;
    auth: any;
  }

  const StyledFirebaseAuth: React.FC<StyledFirebaseAuthProps>;

  export default StyledFirebaseAuth;
}
