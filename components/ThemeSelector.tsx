"use client";
import { themes } from '@/utils/utilities';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface ThemeSelectorProps {
    theme: string;
    setTheme: (theme: string) => void;
}

function ThemeSelector({theme, setTheme}: ThemeSelectorProps) {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);

        console.log(newTheme); 
    };
  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
    <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title capitalize w-[120px]">
            {theme} <ChevronDown />
        </div>
        {showDropdown && 
        <div className="dropdown-menu relative top-[94px] w-[120px]">
            {themes.map((theme, i) => {
            return (
                <button key={i} onClick={() => handleThemeChange(theme)} className="capitalize text-left">
                    {theme}
                </button>
            );
        })}</div>}
        </div>
        </OutsideClickHandler>
  );
}

export default ThemeSelector;
