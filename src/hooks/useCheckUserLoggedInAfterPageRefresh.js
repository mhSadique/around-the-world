
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { UserData } from "../Contexts/UserInfoContext";
const auth = getAuth();
const useCheckUserLoggedInAfterPageRefresh = () => {
    
    const {setLoggedIn, setLoading, setUser} = useContext(UserData);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            setLoggedIn(true);
            setLoading(false);
        } else {
          console.log('user is signed out');
          // setLoading(true);
        }
      });
};

export default useCheckUserLoggedInAfterPageRefresh;