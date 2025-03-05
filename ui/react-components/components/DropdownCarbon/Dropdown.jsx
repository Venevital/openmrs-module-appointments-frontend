import React from "react";
import { PropTypes } from "prop-types";
import { injectIntl } from "react-intl";
import { Dropdown } from "carbon-components-react";
import Title from "../Title/Title.jsx";

const DropdownCarbon = (props) => {
    const {
        options,
        placeholder,
        onChange,
        isDisabled,
        selectedValue,
        id,
        titleText,
        isRequired,
        intl
    } = props;
    const title = titleText && <Title text={ titleText } isRequired={ isRequired } />
    const chooseLabel = intl.formatMessage({ id: "CHOOSE_LABEL", defaultMessage: "Choose an option" });
    return (
        <div
            data-testid="select dropdown"
            style={{marginRight: "5px"}}
        >
            <Dropdown
                id={id}
                items={options}
                onChange={onChange}
                titleText={title}
                disabled={isDisabled}
                label={chooseLabel}
                initialSelectedItem={selectedValue}
            />
        </div>
    );
};

export default injectIntl(DropdownCarbon);

DropdownCarbon.propTypes = {
    intl: PropTypes.object.isRequired,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool
};
