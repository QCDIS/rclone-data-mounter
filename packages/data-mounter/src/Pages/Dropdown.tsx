import React, { useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';

interface DropdownProps {
    options: string[];
    show: boolean;
    className: string;
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dropdown: React.FC<DropdownProps> = ({ options, show, className, selectedIndex, setSelectedIndex }) => {
    const [selectedOption, setSelectedOption] = useState(options[selectedIndex]);

    if (!show) {
        return null;
    }

    return (
        <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
            <Select
                className={className}
                value={selectedOption}
                onChange={(event) => {
                    setSelectedOption(event.target.value as string);
                    setSelectedIndex(options.indexOf(event.target.value as string));
                }}
            >
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
