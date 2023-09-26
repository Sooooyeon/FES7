import React from 'react';
import { useState, useEffect } from 'react';
import ImageList복습 from './components/ImageList복습';
import scroll복습 from './Hook/scroll복습';
import Loading from './components/Loading';


export default function ImagesLoad복습() {

    const [imageList, setImageList] = useState([]);

    // 페이지 번호 변경 (api에 전달할 페이지 값을 관리)
    const [pageToFetch, setPageToFetch] = useState(1);

    // 로딩화면 이미지
    const [isLoading, setIsLoading] = useState(false);

    const isBottom = scroll복습();
    console.log(isBottom);

    // 스크롤이 브라우저 창 하단까지 이동했을 경우 데이터의 다음 페이지를 가져와 보여줌
    useEffect(()=>{
        if(isBottom){
            setPageToFetch((prevPage)=>{
                return prevPage + 1;
            })
        }
    },[isBottom])

    // 이미지 데이터 가져오기
    async function fetchImagesByPage(){
        setIsLoading(true);
        try{
        const response = await fetch(`https://picsum.photos/v2/list?page=2${pageToFetch}&limit=6`);

        // 예외처리
        if(!response.ok){
            throw new Error('네트워크에 문제가 발생했습니다.');
        }

        const data = await response.json();

        setImageList([...imageList, ...data]);

        setIsLoading(false);

        } catch(error){
            console.error(error);
        }
        
    } 

    // useEffect를 사용하지 않으면 state가 변경될때마다 다시 렌더링되어 함수가 반복실행됨 
    // useEffect를 사용해 변수들의 변화가 일어날 때마다 실행하도록 한다.
    useEffect(()=>{
        fetchImagesByPage();
    },[pageToFetch])

    return (
        <>
            <ImageList복습 imageList={imageList}/>
            {isLoading && <Loading />}
        </>
    )
}