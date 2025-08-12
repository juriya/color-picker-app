const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div id="color-picker-container" style={{backgroundColor: color}}>
      <input onChange={handleColorChange} type="color" value={color} id="color-input" />
    </div>
  );
};