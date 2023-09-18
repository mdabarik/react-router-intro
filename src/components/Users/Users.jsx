import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './User.css';

const Users = () => {
    const users = useLoaderData();
    // state -- data
    // state -- loader
    // use effect
    // fetch -> state set -> set state
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>FAntastic and Polite Users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;


