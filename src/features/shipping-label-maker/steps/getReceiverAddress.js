import React from 'react';
import PropTypes from 'prop-types';

function GetSenderAddress () {
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;