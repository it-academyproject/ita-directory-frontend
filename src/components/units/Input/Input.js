import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	StyledError,
	StyledInput,
	StyledLabel,
	StyledContainer,
	StyledIconInput,
	StyledIcon,
	StyledContainerInputError,
} from "./styles";

const Input = ({
	type,
	placeholder,
	value,
	onChange,
	onFocus,
	onBlur,
	textStyles, //not working
	inputStyles,
	labelStyles,
	className,
	id,
	name,
	minlength,
	maxlength,
	size,
	success,
	errorText,
	errorStyles,
	error,
	disabled,
	label,
	inputContainerClassName,
	required,
	icon,
}) => {
	const hasIcon = icon ? true : false;

	return (
		<>
			<StyledContainer className={inputContainerClassName}>
				<StyledLabel htmlFor={id} style={labelStyles}>
					{label}
				</StyledLabel>
				<StyledContainerInputError>
					<StyledIconInput className={inputContainerClassName}>
						{hasIcon && (
							<StyledIcon>
								<FontAwesomeIcon icon={icon} />
							</StyledIcon>
						)}
						<StyledInput
							type={type}
							placeholder={placeholder}
							value={value}
							onChange={onChange}
							onFocus={onFocus}
							onBlur={onBlur}
							className={`${className} ${error ? "error" : ""}`}
							id={id}
							name={name}
							disabled={disabled}
							minLength={minlength}
							maxLength={maxlength}
							size={size}
							success={success}
							required={required}
							style={inputStyles}
						/>
					</StyledIconInput>
					<StyledError
						dangerouslySetInnerHTML={{__html: error ? errorText : null}}
						className={className}
						styles={errorStyles}
					/>
				</StyledContainerInputError>
			</StyledContainer>
		</>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	className: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	minlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	maxlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	size: PropTypes.number,
	disabled: PropTypes.bool,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	errorStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	error: PropTypes.bool,
	inputContainerClassName: PropTypes.string,
	required: PropTypes.bool,
};

export default Input;
