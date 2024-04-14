import React, { useEffect, useRef } from 'react'
import Card from './Card';
import { Button } from './Button';
import ReactDOM from 'react-dom';


const BackDrop = (props)=> {
    return (
        <div onClick={props.onConfirm} className='backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0'>

        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className='error-modal'>

            <Card className="w-[36rem] !p-0 z-20">
                <header className='  bg-red-700 p-4 text-white rounded-t-xl   '>
                    <h2 className='text-center text-xl text-white'>
                        {props.error.title}
                    </h2>
                </header>
                <section className='p-4'>
                    {props.error.message}
                </section>
                <footer className='p-4 flex justify-end'>
                    <Button className="w-32" onClick={props.onConfirm}>Tamam</Button>
                </footer>
            </Card>
        </div>
    )
}


const ErrModal = (props) => {

    const cleanupRef=useRef();

    useEffect(()=>{
     
        console.log("modal olusturuldu");
        return ()=>{
            if(cleanupRef.current){
                
                console.log("component kaldırıldı");
                props.setWorkers([])
            }
        }
    },[cleanupRef,props]);

    useEffect(()=>{
        return ()=>{
            cleanupRef.current=true;
        };
    },[])




    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} error={props.error}/>,document.getElementById("overlay-root"))}
        </React.Fragment>
        
    )
}



export default ErrModal;