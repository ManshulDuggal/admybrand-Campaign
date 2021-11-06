import React from "react";
import Link from "next/link";

interface Props {
  item: {
    key: number;
    heading: string;
    content: string;
    url: string;
  };
}

const Item = ({ item }: Props) => {
  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="hover:underline cursor-pointer">
        <h1 className='text-sm font-pops text-darkblue font-medium py-2'>{item.heading}</h1>
        <p className='text-xs font-inter text-blue '>{item.content}</p>
      </div>
    </a>
  );
};

export default Item;