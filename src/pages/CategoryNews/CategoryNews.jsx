import { el } from 'date-fns/locale';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import News from '../../Components/News/News';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
     if(id == "0"){
      setCategoryNews(data);
      return
     }
     else if(id == '1'){
      const filteredNews = data.filter((news) => news.others.is_today_pick == true);
      setCategoryNews(filteredNews)
     }
     else{
      const filteredNews = data.filter((news) => news.category_id == id)
    //  console.log(filteredNews)
     setCategoryNews(filteredNews)
     }
    }, [data, id])
    
  return (
    <div>
      <h1 className='text-xl font-semibold text-primary'>Dragon News Home ({categoryNews.length})</h1>
      <div>
        {
          categoryNews.map(news => <News key={news.id} news={news} />)
        }
      </div>
    </div>
  )
}

export default CategoryNews
