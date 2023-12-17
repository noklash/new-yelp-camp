"use client"

import React, { useState } from 'react';
import ToggleSwitch from "@/components/ToggleSwitch";

type Props = {
    text: string
}
const PostDescription = ({text}: Props) => {
    const [checked, setChecked] = useState(false);
    const wrapped = checked ? "text-xl font-normal mx-auto whitespace-pre-wrap mt-4" : "text-xl font-normal mx-auto mt-4"
  return (
    <>
    <ToggleSwitch label="Wrap Text" checked={checked} setChecked={setChecked}/>
    <pre className={wrapped}>
        {text}
    </pre>
    </>
  )
}

export default PostDescription