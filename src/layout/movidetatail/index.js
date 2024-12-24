import React, { useEffect, useState } from 'react'
import Bread from '../../global/components/Bread'
import "./moviedetail.css"
import Detail from './detail/Detail'
import MovieShowtimes from './time/MovieShowtimes'
import axios from 'axios'
import { port } from '../../port/config'
import Loading from '../../global/components/Loading'
import { useParams } from 'react-router-dom'
const MovieDetail = () => {

    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams(); // Retrieve the 'id' parameter from the URL

    const [data, setData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${port.ip}/movies/${id}`,
                );
                setData(response.data.data);
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);
    if (isLoading) return <Loading />;
    return (
        <div className='movi-detail'>
            <Bread name={data.title} />
            <Detail data={data} />
            <MovieShowtimes name={data.title} movieId={data.id} duration={data.duration} />
            {/* <QRCodeGenerator />  */}

        </div>
    )
}

export default MovieDetail