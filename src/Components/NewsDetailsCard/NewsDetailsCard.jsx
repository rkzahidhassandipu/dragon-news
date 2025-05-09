import React from 'react'
import { Link } from 'react-router';
import { LuMoveLeft } from "react-icons/lu";

const NewsDetailsCard = ({news}) => {
    const { id, title, thumbnail_url, details, author, total_view, rating } = news;
  return (
    <div className='p-8 shadow-md rounded-xl'>
      <img className='w-full' src={thumbnail_url} alt="" />
      <div>
        <h2 className='text-4xl text-primary font-semibold my-5'>{title}</h2>
        <p className='text-accent'>{details}</p>
        <Link className='mt-8 px-8 py-4 bg-secondary flex w-4/12 text-white items-center' to={`/category/${news.category_id}`}> <LuMoveLeft className='mr-2 inline' />All news in this category</Link>
      </div>
    </div>
  )
}

export default NewsDetailsCard
