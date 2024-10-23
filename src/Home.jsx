import React,{useState} from 'react'


function Home() {

  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [result, setResult] = useState(0)

  console.log(amount)
  console.log(rate)
  console.log(year)

  const calculate = (e)=>{
    e.preventDefault()
    console.log((amount*rate*year)/100)
    setResult((amount*rate*year)/100)
  }
  

  return (
    <>
    <div className='d-flex justify-content-center align-items-center ' style={{height:'80vh'}}>
        <div className="form-control w-75 border shadow p-5">
          <form action=""  onSubmit={(e)=>{calculate(e)}}>
            <input type="text"  className="form-control mb-3" placeholder='enter the amount' onChange={(e)=> { setAmount(e.target.value)}}/>
            <input type="text" className="form-control mb-3" placeholder='enter the rate %'onChange={(e)=> { setRate(e.target.value)}}/>
            <input type="text"  className="form-control mb-3" placeholder='year'onChange={(e)=> { setYear(e.target.value)}}/>
            <button type='submit' className='btn btn-success mt-2 '>calculate</button>
            <button type='reset' className='btn btn-danger mt-2 ms-2'>reset</button>
          </form>
          <div className='text-center fw-bold'>
            result : {result}
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Home
