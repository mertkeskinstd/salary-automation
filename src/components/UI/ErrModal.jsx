import React from 'react'
import Card from './Card';
import { Button } from './Button';

const ErrModal = (props) => {




    return (
        <div className='error-modal'>
            <div onClick={props.onConfirm} className='backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0'>

            </div>
            <Card className="w-[36rem] p-0 z-20">
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



export default ErrModal;