import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const About = () => {
    const {displayName} = useContext(AuthContext)
    return (
        <div>
            About page ,welcome {displayName}
        </div>
    );
};

export default About;