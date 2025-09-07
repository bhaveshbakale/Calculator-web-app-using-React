const isLogged=(state='false',action)=>{
    switch(action.type){
        case 'Sign_in':
            return true;
            default:
                return state;
    }
};
export default isLogged;