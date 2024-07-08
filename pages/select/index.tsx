import { useState } from "react";
import Select from "./components";

export default function SelectComponentPage() {
  const [first, setFirst] = useState("None");

  return <main className="max-w-screen-md mx-auto p-4">
    <div className="flex flex-col gap-6">
      <h1 className="h1">Select</h1>
      <div className="flex flex-col gap-4">
        <h2 className="h2">Default</h2>
        <Select id="test" className='min-w-32' onChange={(value) => {
          if (value) setFirst(value);
        }} optionList={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
        ]} />
        <div>Selected value: {first}</div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="h2">Disabled</h2>
        <Select id="test2" className='min-w-32' disabled optionList={[
          { label: 'Option 1', value: 'option1' },
        ]} />
      </div>
    </div>
  </main>;
}
