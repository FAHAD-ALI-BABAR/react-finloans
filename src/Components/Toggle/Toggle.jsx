import React, { useState } from 'react'

const Toggle = () => {
    const [switchStates, setSwitchStates] = useState({
        defaultSwitch: false,
        primarySwitch: true,
        confirmSwitch: true,
        defaultCheckbox: false,
        primaryCheckbox: true,
        confirmCheckbox: false,
        defaultRadio: false,
        primaryRadio: true,
        confirmRadio: true,
      });
      const handleToggle = (e) => {
        const { id, checked } = e.target;
        setSwitchStates((prevState) => ({
          ...prevState,
          [id]: checked,
        }));
      };
  return (
    <>

    </>
  )
}

export default Toggle