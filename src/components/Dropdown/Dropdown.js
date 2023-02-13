import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const Dropdown = ({onChange, data, defaultValueText, ...rest}) => {

    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const dropdownRef = useRef();
    
    const showDropdown = () => setOpen(true);

    const handleItemChange = (res) => {
        setSelectedItem(res.label);
        setOpen(false);
        onChange(res);
    }

    const defaultText = (text) => {return text};
    const selectedText = (text) => {return text};

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

    return(
        <div className='dropdown' {...rest}>
            <div className='dropdown-header' onClick={showDropdown}>
                <b>{selectedItem ? selectedText(selectedItem) : defaultValueText ? defaultText(defaultValueText) : data[0].label }</b>
                <img className="icon" src={require('../../assets/left-arrow.svg').default} alt="" />
            </div>
            {isOpen && <div className={`dropdown-body ${isOpen && 'open'}`} ref={dropdownRef}>
                {data.map((item, index) => (
                <div className={`dropdown-item ${selectedItem === item.label ? 'active' : ''}`} onClick={() => handleItemChange(item)} id={item.id} key={index}>
                    {item.label}
                </div>
                ))}
            </div>}
        </div>
    );
}

Dropdown.propTypes = {
    onChange: PropTypes.func,
}

Dropdown.defaultProps = {
    onChange: () => {}, 
}

export default Dropdown;