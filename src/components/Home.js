import React from 'react'



const Home = ({item}) => {
    const {name,transliteration,translation,type,total_verses,id}=item;
    console.log(item);
    
    return (
        <div className='flex space-x-2  '>
           
         
        
<div className="  max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto   " style={{ width: '300px', height: '390px' }} >
{/* bg-white p-4 shadow-md max-w-xs mx-auto */}
              {/* <h1 className='flex flex-col items-center justify-center text-3xl'>{id}</h1> */}
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-green-500"> {id}.  {name}</h1>
    
    <h5 className="mb-3  text-3xl  font-normal text-gray-700 dark:text-gray-400">{transliteration}</h5>

    <h5 className="mb-3  text-3xl  font-normal  dark:text-gray-400 text-green-600">{translation}</h5>
    <h5 className="mb-3  text-2xl  font-normal text-gray-700 dark:text-gray-400"><i>Type:{type}</i></h5>
    <h1 className="mb-3  text-2xl  font-normal text-gray-700 dark:text-gray-400 " ><i>Total Verse :{total_verses}</i></h1>
    {/* <a
        href="/#"
        className="inline-block px-4 py-2 content-center  mt-5 bg-success font-semibold rounded shadow bg-green text-primary  text-white "
      >
        <h1 >Button Link</h1>
      </a> */}

     <a className=' flex flex-col items-center justify-center mt-10' href="#">
     <button type="button" class="   text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Read</button>
     </a>
     
 
    
</div>

            
        </div>




   
    )


}

export default Home;