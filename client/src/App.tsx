import { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import { useGetUsers, useCreateUser, useGetUserById } from "./lib/queries";

type User = {
  name?: string;
  id?: number;
  isMarried?: boolean;
  age?: number;
};

function App() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);
  const {
    data: getUsersData,
    error: getUsersError,
    loading: getUsersLoading,
  } = useGetUsers();

  const {
    data: getUserByIdData,
    error: getUserByIdError,
    loading: getUserByIdLoading,
  } = useGetUserById(id);

  function handleCreateUser() {}



  return (
    <main>
      <h1 className="text-center text-3xl my-12">
        Fetching data from Apollo Graphql server
      </h1>
      <div>
        <h4 className="text-center">Choosen user:</h4>
        {getUserByIdLoading ? (
          <div className="animate-spin">
            <SlRefresh size={36} />
          </div>
        ) : getUserByIdError ? (
          <p className="text-xl text-center opacity-70 font-semibold mt-6">
            Error: {getUserByIdError.message}
          </p>
        ) : (
          <p className="text-xl text-center opacity-70 font-semibold mt-6">
            {getUserByIdData.getUserById.name}
          </p>
        )}
      </div>
      <div>
        <h4 className="text-xl text-center">Users:</h4>
      </div>
      {getUsersLoading ? (
        <div className="animate-spin w-fit mx-auto">
          <SlRefresh size={36} />
        </div>
      ) : getUsersError ? (
        <p className="text-xl text-center opacity-70 font-semibold mt-6">
          Error: {getUsersError.message}
        </p>
      ) : (
        <ul className="">
          {getUsersData.getUsers.map((user: User) => (
            <li key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
              <p>It's {!user.isMarried && "not"} married</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setId(2)}>change user</button>
      <form className="w-1/2 mx-auto flex flex-col gap-2 bg-slate-950 p-4 rounded-lg items-center">
        <input
        className="bg-slate-800 rounded-lg p-2 w-full"
          type="text"
          placeholder="name"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
        className="bg-slate-800 rounded-lg p-2 w-full"
          type="number"
          placeholder="age"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
        className="bg-slate-800 rounded-lg p-2 w-full"
          type="checkbox"
          placeholder="isMarried"
          onChange={(e) => console.log(e.target.checked)}
        />
        <button className="bg-slate-800 hover:bg-slate-700 rounded-lg p-2 w-full" onClick={handleCreateUser}>Create user</button>
      </form>
    </main>
  );
}

export default App;
