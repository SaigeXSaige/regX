import React from 'react';

const Description = ({description, link}) => {
    return (
        <div className="footer card">
            <p>
                {description}
                {link && <a href="`https://en.wikipedia.org/wiki/List_of_Unicode_characters`" target="_blank">{link}</a> }
                .
            </p>
        </div>
    );
}

export default Description;
