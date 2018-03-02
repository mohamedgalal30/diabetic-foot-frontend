import React from 'react';
// import PropTypes from 'prop-types';

const TextInput = ({ id, name, label, type, onChange, placeholder, value, ...props }) => {

	return (
		<div className="row form-group">
			<div className="row">
				<label htmlFor={`text-input-${id}`}>{label}</label>
			</div>
			<div className="row">
				<input
					id={`text-input-${id}`}
					type={type || "text"}
					name={name}
					placeholder={placeholder || ""}
					value={value}
					onChange={onChange}
					{...props}
				/>
			</div>
		</div>
	);
};

// TextInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   error: PropTypes.string
// };

export default TextInput;
