import { React, useState } from 'react';

export default function PrefCheckBox(props) {
  const [isChecked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setChecked((current) => !current)}
        style={{ width: '17px', height: '17px' }}
      />
      <label style={{ color: 'white' }} htmlFor="livroCheckbox">
        {props.name}
      </label>
    </div>
  );
}
