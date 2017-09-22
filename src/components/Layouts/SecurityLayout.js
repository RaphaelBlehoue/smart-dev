import React from 'react';

const SecurityLayout = (props) => (
    <div>
        {props.children}
    </div>
);

SecurityLayout.propTypes = {
    children: React.PropTypes.node
};

SecurityLayout.defaultProps = {
    children: null
};

export default SecurityLayout;