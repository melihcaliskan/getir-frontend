import * as React from "react";

function SvgVehicle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 19" fill="none" {...props}>
      <path
        d="M0 10v5a1 1 0 001 1h1a3 3 0 006 0h6a3 3 0 006 0h1a1 1 0 001-1V3a3 3 0 00-3-3h-9a3 3 0 00-3 3v2H5a3 3 0 00-2.4 1.2L.2 9.4a.61.61 0 00-.07.14l-.06.11A1 1 0 000 10zm16 6a1 1 0 112 0 1 1 0 01-2 0zM9 3a1 1 0 011-1h9a1 1 0 011 1v11h-.78a3 3 0 00-4.44 0H9V3zM7 9H3l1.2-1.6A1 1 0 015 7h2v2zm-3 7a1 1 0 112 0 1 1 0 01-2 0zm-2-5h5v2.78a3 3 0 00-4.22.22H2v-3z"
        fill="#5C4D9F"
      />
    </svg>
  );
}

export default SvgVehicle;
