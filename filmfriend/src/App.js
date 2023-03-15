import React, { useState } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <Input
        label="Label:"
        type="text"
        className="custom-class"
        value={inputValue}
        setValue={setInputValue}
        icon={null}
        inputAttributes={null}
      />

      <SelectInput
        label="Select Label"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        className="custom-class"
        value={selectValue}
        setValue={setSelectValue}
      />

      <Button
        label="Button Label"
        className="custom-class"
        onClick={handleButtonClick}
        icon={null}
      />

      <SearchBar
        title={inputValue}
        setTitle={setInputValue}
      />
    </div>
  );
}

export default App;
