import React from "react";

export default function TextField({ label, value, onChange, type }) {
  return (
    <div class='w-full max-w-lg'>
      <div class='md:flex md:items-center mb-6'>
        <div class='md:w-1/3'>
          <label
            class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-full-name'
          >
            {label}
          </label>
        </div>
        <div class='md:w-2/3'>
          <input
            class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            id='inline-full-name'
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
