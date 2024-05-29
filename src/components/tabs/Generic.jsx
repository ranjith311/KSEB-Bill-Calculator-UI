import React, { useState } from 'react'
import Select from '../form/Select'
import tariff from "../../assets/tariff.json"
import purpose from "../../assets/purpose.json"
import Radio from '../form/Radio'
import Input from '../form/Input'
import { API_SERVICES } from '../../services/api-services'

const Generic = ({ setResult }) => {

  const [units, setUints] = useState(0)
  const [isErr, setIsErr] = useState(false)
  const [errMsg, setErrMsg] = useState("")


  const calcualteBill = (e) => {
    e.preventDefault()
    setIsErr(false)
    setErrMsg("")

    if (units === 0) {
      setIsErr(true)
      setErrMsg("Please enter consumed units")
    }


    API_SERVICES.calculateBill(units).then(({ data }) => {
      setResult(data?.result ?? 0)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <>
      <div className='border px-4 py-8'>
        <form onSubmit={calcualteBill}>
          <div className="mb-4 lg:flex items-center px-2 ">
            <div className='w-1/3 pb-2'>
              <label className="text-gray-700 font-bold">Tariff</label>
            </div>
            <div className='w-full'>
              <Select options={tariff} classes={"mt-1 block w-full form-select px-4 py-2 rounded-md border"} />
            </div>
          </div>


          <div className="mb-4 lg:flex items-center px-2 ">
            <div className='w-1/3 pb-2'>
              <label className="text-gray-700 font-bold">Purpose</label>
            </div>
            <div className='w-full'>
              <Select options={purpose} classes={"mt-1 block w-full form-select px-4 py-2 rounded-md border"} />
            </div>
          </div>


          <div className='mb-4 lg:flex items-center px-2'>
            <div className='lg:w-1/3 pb-2 w-full'>
              <label className="text-gray-700 font-bold">Billing Cycle</label>
            </div>
            <div className='w-full'>
              <div className='flex gap-4'>
                <Radio classes={"mr-2"} checked labelClass={"flex items-center"} label={"2 Months"} />
                <Radio classes={"mr-2"} disabled labelClass={"flex items-center"} label={"1 Month"} />
              </div>
            </div>
          </div>


          <div className="mb-4 lg:flex items-center px-2 ">
            <div className='lg:w-1/3 pb-2 w-full'>
              <label className="text-gray-700 font-bold">Consumed Units</label>
            </div>
            <div className='w-full'>
              <Input value={units} type={"number"} onchange={(e) => setUints(e.target.value)} classes={"mt-1 block w-full form-select px-4 py-2 rounded-md border"} />
              {isErr && <span className='text-red-400'>{errMsg}</span>}
            </div>
          </div>


          <div className='mb-4 lg:flex items-center px-2'>
            <div className='w-1/3 pb-2'>
              <label className="text-gray-700 font-bold"> Phase</label>
            </div>
            <div className='w-full'>
              <div className='flex gap-4'>
                <Radio classes={"mr-2"} checked labelClass={"flex items-center"} label={"Single Phase"} />
                <Radio classes={"mr-2"} disabled labelClass={"flex items-center"} label={"Three Phase"} />
              </div>
            </div>
          </div>

          <div className='mb-4 flex items-center px-2'>
            <button type='submit' className='btn px-4 py-2 bg-white border rounded hover:bg-sky-600 hover:text-white text-sky-600 border-sky-600'>Submit</button>
          </div>


        </form>
      </div>
    </>
  )
}

export default Generic