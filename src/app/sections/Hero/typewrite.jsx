"use client";

import React, { memo } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = memo(() => {
  return (
    <Typewriter
      options={{
        strings: [
          'and this is my portfolio',
        ],
        autoStart: true,
        loop: false,
        delay: 75
      }}
    />
  );
});

TypewriterComponent.displayName = 'TypewriterComponent';

export default TypewriterComponent;
