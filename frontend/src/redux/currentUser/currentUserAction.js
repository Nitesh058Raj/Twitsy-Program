const setUser = (userInfo) =>{
    return{
        type: "SET_USER_INFO",
        payload: userInfo
    }
}

export default setUser;
