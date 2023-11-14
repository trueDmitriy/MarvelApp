import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p style={{ 'text-align': 'center' }}>Page not Found</p>
            <Link to='/'></Link>
        </div>
    )
}

export default Page404;