import React, { useEffect } from 'react';
import { useState } from 'react';
import Home from './Home';

const SurahList = () => {
    const [list,setList]=useState([]);
useEffect(()=>{
    fetch('bn.json')
    .then(res=>res.json())
    .then(data=>{
        const allList=data;
        setList(allList)
        
    })
    
   
},[])

    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10  ">
            
                    {
                        list?.map(item=>
                            <Home
                            key={item.id}
                            item={item}
                            
                            >
                               
                            </Home>)
                    }
                </div>
                
        </div>
    );
};

export default SurahList;