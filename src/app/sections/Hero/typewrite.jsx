"use client";

import React, { memo } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = memo(() => {
  return (
    <Typewriter
      options={{
        strings: [
          'this is my portfolio',
          "I'm a game dev",
          "I play guitar",
          "I make websites",
          "I do graphic design"
        ],
        autoStart: true,
        loop: true,
        delay: 75
      }}
    />
  );
});

TypewriterComponent.displayName = 'TypewriterComponent';

export default TypewriterComponent;