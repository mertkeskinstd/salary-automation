import React from 'react'
import Card from '../UI/Card';

const WorkerList = (props) => {
    const {workers,setWorkers}=props;
    if(workers.length<1){
        return;
    }

    const deleteWorker = (id) => {
        setWorkers(workers.filter((item)=> item.id !== id));
    }
return (
    <Card className="mt-10">

        <ul>
            <li className='flex justify-between p-2'>
                <span className='font-bold'>isim</span>
                <span className='font-bold'>Maaş</span>
            </li>
            {workers.map((worker) => (
                <li key={worker.id} onClick={()=>deleteWorker(worker.id)} className='flex rounded-xl justify-between cursor-pointer hover:shadow-xl hover:bg-orange-500 p-2 duration-500'>
                    <span>{worker.name}</span>
                    <span className='text-teal-700 font-medium'>{worker.wage}</span>
                </li>
            ))};


        </ul>
    </Card>
)
}





export default WorkerList;