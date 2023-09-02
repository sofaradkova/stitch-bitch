'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, youtubeOptions } from '@utils/fetchData';
import { Card } from 'flowbite-react';

const Videos = ({ query }) => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
 
    useEffect(() => {
        const fetchVideosData = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const videosData = await fetchData(`${youtubeSearchUrl}/search?query=${query}`, youtubeOptions);
            setVideos(videosData.contents);
        }
        fetchVideosData();
    }, [id])

  return (
    <div className="grid grid-cols-3 gap-10 px-6">
        {videos?.slice(0, 3)?.map((item, index) => (
            <Card href={`https://www.youtube.com/watch?v=${item.video.videoId}`} >
                <img 
                        src={item.video.thumbnails[0].url}
                        className="border rounded"
                />
                <div className="line-clamp-1">{item.video.title}</div>
            </Card>
        ))}
    </div>
  )
}

export default Videos