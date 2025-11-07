import { MapPin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl '> 
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            {/* logo Section */}
            <div className='font-bold text-3xl'>
                <Link to='/'><h1><span className='text-red-400 font-serif'>Z</span>oop</h1></Link>
            </div>

            <div className='flex gap-1 cursor-pointer text-gray-700 items-center '>
                <MapPin className='text-red-500' />
            </div>
        </div>
    </div>
  )
}

export default Navbar