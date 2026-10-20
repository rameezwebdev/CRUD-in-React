const DataCard = ({currdata}) => {
    const {id, title, body} = currdata;
  return (
    <div className="">
      <li className="bg-[#21303E] border-l-6 border-l-white sm:h-90 lg:h-80 rounded-xl px-5 py-1 gap-5 flex flex-col justify-center text-white">
         <p>{id}</p>
         <p>{`Title: ${title}`}</p>
         <p>{`Discription: ${body}`}</p>
        <span className="flex gap-8">
          <button className="bg-[#12D998] px-8 py-1.5 rounded-sm">Edit</button>
          <button className="bg-[#EF4A43] px-8 py-1.5 rounded-sm">Delete</button>
        </span>
      </li>
    </div>
  )
}

export default DataCard
