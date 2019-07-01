import React from 'react';

const User = ({name, email, id}) => {
    return(
        // Must return one element
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='card' src={id} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default User;