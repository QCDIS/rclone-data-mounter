import React from 'react';
import { MenuItem, Select } from '@material-ui/core';

interface DropdownProps {
    options: string[];
    show: boolean;
    className: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, show, className }) => {
    if (!show) {
        return null;
    }

    return (
        <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
            <Select className={className} defaultValue={options[0]}>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default Dropdown;
