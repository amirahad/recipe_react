import useTheme from '../../hooks/useTheme';
import './ThemeSelector.css';

import light from '../../assets/dark_mode_toggler.svg';
import dark from '../../assets/light_mode_toggler.svg';

const themeColor = ['#58249c', '#249c6b', '#b78233', '#b73333', '#b733b7']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        // if (mode === 'light') {
        //     changeMode('dark');
        // } else {
        //     changeMode('light');
        // }
        changeMode(mode === 'light' ? 'dark' : 'light');
    }
    console.log(mode);

    return (
        <div>
            <div className='theme-selector'>
                <div className='theme-btn'>
                    {themeColor.map((color, index) => (
                        <button
                            key={index}
                            style={{ background: color }}
                            onClick={() => changeColor(color)}
                        ></button>
                    ))}
                </div>
            </div>
            <div className='mode-toggle'>
                <img
                    src={mode === 'light' ? light : dark}
                    alt="dark/light"
                    onClick={toggleMode}
                    style={{ filter: mode === 'dark' ? 'invert(1)' : 'invert(0)' }}
                />
            </div>
        </div>
    )
}
