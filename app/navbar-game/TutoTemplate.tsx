"use client";

import React from "react";

interface TutoTemplateProps {
  isPassed: boolean;
  InstructionsBlob: React.JSX.Element | undefined;
}

const TutoTemplate: React.FC<TutoTemplateProps> = ({
  isPassed,
  InstructionsBlob,
}) => {
  return (
    <>
      {InstructionsBlob}
      {isPassed ? <div>✅ You have passed this step 👏</div> : null}
    </>
  );
};

export default TutoTemplate;
