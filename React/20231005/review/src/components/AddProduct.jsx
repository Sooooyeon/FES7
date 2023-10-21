import React from 'react'
import { useState } from 'react';

export default function AddProduct() {
  const [itemName,setItemName] =  useState("");
  const [startDate,setStartDate] =  useState("");
  const [endDate,setEndDate] =  useState("");
  const [period,setPeriod] =  useState("");
  const [desc,setDesc] =  useState("");
  const [image,setImage] =  useState("");
  

  const addItem = async (addItemData) => {
        const token = localStorage.getItem("token");
        console.log(token);
        try{
            const res = await fetch("https://api.mandarin.weniv.co.kr/product",
            {
                method:"POST",
                headers:{
                    Authorization:`Bearer ${token}`,
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(addItemData)
            });
            const json = await res.json();
            console.log(json);

        } catch (error) {
            alert("아이템 등록에 실패했습니다!")
        }
    }


    const handleItemName= (e)=> {
      console.log(e.target.value)
      setItemName(e.target.value)
    } 

    const handleIDesc= (e)=> {
      console.log(e.target.value)
      setDesc(e.target.value)
    }  

    const uplaodImg = async (imageFile) =>{
      const baseUrl = "https://api.mandarin.weniv.co.kr/";
      const reqUrl = baseUrl+"image/uploadfile";

      const form = new FormData();

      form.append("image",imageFile)

      const res = await fetch(reqUrl,{
        method:"POST",
        body:form
      });
      const json = res.json();
      console.log(baseUrl+json.filename);
      const image = baseUrl+json.filename;
      setImage(image);
    }

    const handleImage= (e)=> {
      const imageFile = e.target.files[0];
      uplaodImg(imageFile);
    }

  

  const start = (e)=>{
    console.log(e.target.value)
    setStartDate(e.target.value)
  }

  const end = (e)=>{
    console.log(e.target.value)
    setEndDate(e.target.value)
  }

  const handlePeriod = (startDate,endDate) => {
    console.log(startDate,endDate);
    const date = parseInt((startDate+endDate).replaceAll("-",""));
    setPeriod(date);
    return date;
  }

  const submitAddProduct = (e)=>{
      e.preventDefault();
      handlePeriod(startDate,endDate);

      const AddProductData = {
            product:{
            itemName: itemName,
            price : period,
            link : desc,
            itemImage : image
          }
      }
      console.log(AddProductData)

      addItem(AddProductData);
  }

  return (
    <form>
      <h1>상품등록</h1>
      <div>상품명<input type="text" value={itemName} onChange={handleItemName}/></div>
      <div>기간 : 시작일<input type="date" onChange={start} value={startDate}/></div>  
      <div>종료일<input type="date" onChange={end} value={endDate}/></div>
      <div>상세설명<input type="text" onChange={handleIDesc} value={desc}/></div>
      <div>
        <label htmlFor="profileImg">
            <img src={image} alt="" id="imagePre"/>
        </label>
        <input type="file" onChange={handleImage} id="profileImg" name="image" accept="image/*" />
      </div>
      <button onClick={submitAddProduct}>상품추가</button>
    </form>
  )
}
