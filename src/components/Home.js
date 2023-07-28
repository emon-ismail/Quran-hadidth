import React from 'react'



const Home = ({item}) => {
    const {name,transliteration,translation,type,total_verses}=item;
    console.log(item);
    
    return (
        <div className='flex space-x-2  '>
           
         
        
<div class="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto   " style={{ width: '300px', height: '390px' }} >
{/* bg-white p-4 shadow-md max-w-xs mx-auto */}
    <a href="#">
        <h1 class="mb-2 text-4xl font-bold tracking-tight text-secondary">{name}</h1>
    </a>
    <h1 class="mb-3 text-4xl  font-normal text-gray-700 dark:text-gray-400 text-secondary">{transliteration}</h1>
    <h5 class="mb-3  text-3xl  font-normal text-gray-700 dark:text-gray-400 text-secondary">{translation}</h5>
    <h5 class="mb-3  text-2xl  font-normal text-gray-700 dark:text-gray-400">Type:{type}</h5>
    <h1 class="mb-3  text-2xl  font-normal text-gray-700 dark:text-gray-400 " >Total Verse :{total_verses}</h1>
    <a
        href="/#"
        className="inline-block px-4 py-2 content-center  mt-5 bg-success font-semibold rounded shadow bg-green text-primary   "
      >
        <h1 >Button Link</h1>
      </a>
     
 
    
</div>

            
        </div>




   
    )


}

export default Home;