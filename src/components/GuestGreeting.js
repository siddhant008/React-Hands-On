import LoginButton from './LoginButton';

function GuestGreeting(props) {
    return (
        <div>
            <h1>Please Sign up</h1>
            <LoginButton click={props.click}/>
        </div>
    )
}

export default GuestGreeting;