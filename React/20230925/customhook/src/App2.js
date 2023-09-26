import React, { useState, useEffect } from 'react'
import ImageList from './components/ImageList';
import useScroll from './Hook/useScroll';
import Loading from './components/Loading';

export default function App2() {
    
    const [imageList, setImageList] = useState([]);

    // api에 전달할 페이지 값을 관리
    const [pageToFetch,setPageToFetch] = useState(1);

    const [isLoading, setIsLoading] = useState(false);

    const isBottom = useScroll();
    console.log(isBottom);

    // 스크롤이 끝까지 이동했을 경우 데이터의 페이지를 하나 올립니다.
    useEffect(()=>{
        if(isBottom){
            setPageToFetch((prevPage)=>{
                return prevPage+1;
            })
        }
    },[isBottom]);


    // 이미지 데이터 로딩 함수
    async function fetchImagesByPage(){
        setIsLoading(true);
        try{
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);

            if(!response.ok){
                throw new Error('네트워크에 문제가 발생했습니다!');
            }

            const data = await response.json();
    
            setImageList([...imageList, ...data]);

            setIsLoading(false);

        } catch(error) {
            console.error(error);
        }
        

    }    

    useEffect(()=>{
        fetchImagesByPage();
    },[pageToFetch])

    return (
        <>
            <ImageList imageList={imageList}/>
            {isLoading && <Loading />}
        </>
    )
}
