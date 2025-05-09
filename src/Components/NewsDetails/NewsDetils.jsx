import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import RightAside from '../RightAside/RightAside'
import { useLoaderData, useParams } from 'react-router'
import NewsDetailsCard from '../NewsDetailsCard/NewsDetailsCard'

const NewsDetils = () => {
    const [news, setNews] = useState([])
    const data = useLoaderData()
    const {id} = useParams();
    // console.log(id);

    useEffect(() => {
      const newsDetails = data.find((singleNews) => singleNews.id == id)
      setNews(newsDetails)
    }, [data, id])
    
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className='grid w-4/5 mx-auto grid-cols-12 gap-6 mt-6'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
               <NewsDetailsCard news={news} />
            </section>
            <aside className='col-span-3'>
                <RightAside />
            </aside>
        </main>
    </div>
  )
}

export default NewsDetils
