import { Checkbox } from "pretty-checkbox-react";
import { Check } from "react-feather";

function CheckBoxIcon() {
  // return <Check />;
  return (
    <>
      <Check />
      <Checkbox
        animation="smooth"
        icon={<Check className="svg" data-type="svg" />}
      >
        Smooth
      </Checkbox>
    </>
  );
}

export default CheckBoxIcon;
