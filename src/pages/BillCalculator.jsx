import React, { act, useState } from 'react';
import Generic from '../components/tabs/Generic';
import Advanced from '../components/tabs/Advanced';

const BillCalculator = () => {

    const [activeTab, setActiveTab] = useState("generic")
    const [result, setResult] = useState(0)

    const charges = ["Duty", "Fixed Charge (FC)*", "Meter Rent", "Meter Rent Central GST", "EC Subsidy", "Meter Rent State GST", "FC Subsidy"]

    const handleTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className='lg:flex'>

                <div className='lg:w-3/5 w-full flex justify-end my-4 drop-shadow-md'>
                    <div className='mx-1 lg:mx-0 lg:w-11/12 p-4 w-full '>
                        <div className='w-full bg-white border rounded'>
                            <h2 className='p-2 font-semibold text-xl bg-sky-600 text-white rounded-t'>Electricity Bill Calculator</h2>
                            <div className='flex justify-evenly'>
                                <button onClick={() => handleTab('generic')} className={`py-2 w-full border ${activeTab == "generic" ? "bg-slate-100 text-sky-600" : ""}`}>Generic</button>
                                <button onClick={() => handleTab('advanced')} className={`py-2 w-full border ${activeTab == "advanced" ? "bg-slate-100 text-sky-600" : ""}`}>Advanced</button>
                            </div>
                            <div className='border'>
                                {activeTab == "generic" ? (
                                    <Generic setResult={setResult} />
                                ) : activeTab == "advanced" ? (
                                    <Advanced />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='lg:w-2/5 w-full my-4'>
                    <div className='h-96 mx-1 lg:mx-0 p-4'>

                        {
                            result == 0 ? (
                                <div className='w-full rounded bg-sky-100 h-96 flex flex-col item-center justify-center'>
                                    <div className='text-center py-2'>
                                        <h2 className='underline'>PANDEMIC - COVID19 - LOCKDOWN PERIOD BILLS</h2>
                                    </div>
                                    <div className='pl-20 pr-8'>
                                        <ul className='list-disc'>
                                            <li>During pandemic covid-19, meter reading of a number of consumers were taken after four months. For those consumers, the consumed units for a bi-month is to be calculated by dividing the total consumption by two.</li>
                                            <li>After calculating the value of one bi-month, using bill calculator, multiply the value with two, to obtain the electricity bill amount for four months.</li>
                                            <li>Due to lock down, the KSEBL billing system generated an average bill to the consumers based on their average previous consumption, as per section 124 of the Supply Code 2014.</li>
                                        </ul>
                                    </div>
                                </div>

                            ) : (
                                <div className='w-full rounded border h-96 drop-shadow-md'>
                                    <div className=''>
                                        <table className="table-fixed w-full">
                                            <thead className='bg-sky-600 text-white '>
                                                <tr className=''>
                                                    <th className='text-left px-2 lg:w-4/5 w-2/3 h-11'>Bill Details</th>
                                                    <th className='text-right px-2 h-11'>Amount(₹)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='p-3 border'>Energy Charge (EC)* [View Details]</td>
                                                    <td className='p-3 border'>{result}</td>
                                                </tr>
                                                {
                                                    charges.map((charge) => {
                                                        return <tr>
                                                            <td className='p-3 border'>{charge}</td>
                                                            <td className='p-3 border'>0.00</td>
                                                        </tr>
                                                    })
                                                }

                                                <tr className='bg-sky-600 text-white'>
                                                    <td className='p-3 border'>
                                                        <div>
                                                            <p>Total Amount</p>
                                                        </div>
                                                        <span className='text-xs'>* Fraction of rupees rounded off in total amount, is adjusted in Energy Charge/Fixed Charge.</span>
                                                    </td>
                                                    <td className='p-3 border'>{result}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        }





                    </div>
                </div>


            </div>
        </>
    )

}

export default BillCalculator;
