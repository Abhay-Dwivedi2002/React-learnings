import React, { useState } from "react";


const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote= (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
    

  }


  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING  */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 h-32 w-full font-medium flex-row py-2 outline-none border-2 rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      <div className=" lg:w-1/2 lg:border-l-2 bg-gray-900 p-10">
        <h1 className="text-3xl  font-bold">Your Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return <div key={idx} className=" flex justify-between flex-col item-start relative h-52 w-40 bg-cover rounded-xl pt-8 pb-5 px-4 text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcBGmZpJi5aUM0KftOhwLjuj0EXQ8X3hFucjWVpSNvQ&s=10')]">
              <div>
                <h3 className="leading-tight text-xl  font-bold">{elem.title}</h3>
                <p className="mt-2 leading-tight font-medium text-gray-500">{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white ">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
