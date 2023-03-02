import React from "react";
import Card from "../ui/Card";
import StyledInput from "../ui/StyledInput";

const Playground = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-96 space-y-4">
        <h1 className="text-2xl font-bold">StyledInput Component</h1>
        <StyledInput placeholder="Some Label" name="Some Label" type="text" />
      </div>

      <div className="w-96 space-y-4">
        <h1 className="text-2xl font-bold">Card Component</h1>
        <Card>Some Content</Card>
      </div>

      <div className="w-96 space-y-4">
        <h1 className="text-2xl font-bold">StyledButton Component</h1>
        {/* Put component here */}
      </div>

      <div className="w-96 space-y-4">
        <h1 className="text-2xl font-bold">StyledLink Component</h1>
        {/* Put component here */}
      </div>
    </div>
  );
};

export default Playground;