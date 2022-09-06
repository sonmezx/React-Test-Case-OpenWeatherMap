import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';


function PrivateRoute({children}) {
    const key = useSelector(state => state.api.key);
    const location = useLocation();
    if(!key){
        return <Navigate to='/SetApiKey' state={{
            return_url: location.pathname
        }} />
    }
    return children;

}

export default PrivateRoute