import img from './error.gif'
const ErrorMessage = () => {
    return (
        <img src={img} alt='error' style={{ margin: '0 auto', display: 'block', height: 200 }} />
    )
}

export default ErrorMessage;