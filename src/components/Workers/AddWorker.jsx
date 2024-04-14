import { useState } from "react";
import { Button } from "../UI/Button";
import Card from "../UI/Card";
import ErrModal from "../UI/ErrModal";
import Wrapper from "../../helpers/Wrapper";






const AddWorker = (props) => {

  const [enteredWorkerName, setenteredWorkedName] = useState("");
  const [enteredWage, setenteredWage] = useState("");
  const [error, setError] = useState();

  // useEffect(()=>{

  // },[])



  const minWage = 5000;


  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "Maaş Alanİ zorunludur",
        message: "Lütfen isim Giriniz."
      })


      return;
    }
    if (+enteredWage < minWage) {
      setError({
        title: "Maaş Alanı zorunludur",
        message: `Lütfen ${minWage} değerinden büyük bir maaş değeri giriniz.`
      });
      return;
    }
    setenteredWorkedName("");
    setenteredWage("");
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage
      },
      ...prevState,
    ]);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (

    // <Fragment>
    //  

    //     {error && <ErrModal onConfirm={errorHandler} error={error} />}

    //     <Card className="mt-2.5" >
    //       <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
    //         <label htmlFor="name" className="font-medium">
    //           Çalışan İsmi
    //         </label>
    //         <input
    //           type="text"
    //           className="max-w-[40rem] w-full mx-auto border p-2"
    //           placeholder="Çalışan ismi yazınız"
    //           id="name"
    //           onChange={(e) => { setenteredWorkedName(e.target.value) }}
    //           value={enteredWorkerName}
    //         />
    //         <label htmlFor="wage" className="font-medium">
    //           Maaş Miktarı
    //         </label>
    //         <input
    //           type="number"
    //           className="max-w-[40rem] w-full mx-auto border p-2"
    //           placeholder="Maaş miktarı yazınız"
    //           id="wage"
    //           onChange={(e) => setenteredWage(e.target.value)}
    //           value={enteredWage}
    //         />
    //         <Button className="mt-2  " type="submit" >Ekle</Button>
    //       </form>
    //     </Card >


    //   
    // </Fragment>

    // <>

    //   {error && <ErrModal onConfirm={errorHandler} error={error} />}

    //   <Card className="mt-2.5" >
    //     <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
    //       <label htmlFor="name" className="font-medium">
    //         Çalışan İsmi
    //       </label>
    //       <input
    //         type="text"
    //         className="max-w-[40rem] w-full mx-auto border p-2"
    //         placeholder="Çalışan ismi yazınız"
    //         id="name"
    //         onChange={(e) => { setenteredWorkedName(e.target.value) }}
    //         value={enteredWorkerName}
    //       />
    //       <label htmlFor="wage" className="font-medium">
    //         Maaş Miktarı
    //       </label>
    //       <input
    //         type="number"
    //         className="max-w-[40rem] w-full mx-auto border p-2"
    //         placeholder="Maaş miktarı yazınız"
    //         id="wage"
    //         onChange={(e) => setenteredWage(e.target.value)}
    //         value={enteredWage}
    //       />
    //       <Button className="mt-2  " type="submit" >Ekle</Button>
    //     </form>
    //   </Card >


    // </>
    <Wrapper>

      {error && <ErrModal onConfirm={errorHandler} setWorkers={props.setWorkers} error={error}/>}

      <Card className="mt-2.5" >
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan ismi yazınız"
            id="name"
            onChange={(e) => { setenteredWorkedName(e.target.value) }}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı yazınız"
            id="wage"
            onChange={(e) => setenteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button className="mt-2  " type="submit" >Ekle</Button>
        </form>
      </Card >


    </Wrapper>
  );
};

export default AddWorker;
