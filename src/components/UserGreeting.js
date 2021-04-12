import LogoutButton from './LogoutButton';

function UserGreeting(props) {
    return (
        <div>
            <h1>Welcome back</h1>
            <LogoutButton click={props.click}/>
        </div>
    )
}

export default UserGreeting;