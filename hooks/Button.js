import React from 'react';

 function Button({handle,inc}) {
  return <div>
      <button onClick={handle}>{inc}</button>
  </div>;
}
export default  React.memo(Button)