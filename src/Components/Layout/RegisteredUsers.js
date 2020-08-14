import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisteredUsers = () => (
    <div>
        <li><NavLink to="/logout">Logout</NavLink></li>
    </div>
)

export default RegisteredUsers;