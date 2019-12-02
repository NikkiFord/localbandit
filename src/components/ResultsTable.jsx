import React from "react";
import "./style.css";

const Results = () => {
  return (
    <table className='table-auto w-full'>
      <thead>
        <tr>
          <th className='px-4 py-2 text-left'>Date</th>
          <th className='px-4 py-2 text-left'>Artists</th>
          <th className='px-4 py-2 text-left'>Venue</th>
      
        </tr>
      
      </thead>
      <tbody>
        <tr>
          <td className='border px-4 py-2'>Jan 20, 2020</td>
          <td className='border px-4 py-2'>Beyonce, Jay-Z</td>
          <td className='border px-4 py-2'>Vivint</td>
        </tr>
        <tr className='bg-gray-100'>
          <td className='border px-4 py-2'>Jan 21, 2020</td>
          <td className='border px-4 py-2'>Adam</td>
          <td className='border px-4 py-2'>112</td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>Jan 21, 2020</td>
          <td className='border px-4 py-2'>Chris</td>
          <td className='border px-4 py-2'>1,280</td>
        </tr>
      </tbody>
      <button
          class='items-end self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-8'
          type='button'>
          Create Combined Playlist
        </button>
    </table>
  );
};

export default Results;
