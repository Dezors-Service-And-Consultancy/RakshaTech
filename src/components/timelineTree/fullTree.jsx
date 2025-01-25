import React from 'react'
import L_SubTree from "./L_SubTree";
import R_SubTree from "./R_Subtree";

export default function FullTree() {
  return (
    <div id="schedule">
    <>
      <R_SubTree />
      <L_SubTree />
    </>
    </div>
  );
}
