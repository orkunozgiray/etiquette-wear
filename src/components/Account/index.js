import React from 'react'

const Account = ({ handleLogout }) => {
    return (
        <section className="account">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
}

export default Account;
