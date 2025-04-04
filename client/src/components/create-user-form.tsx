import { useState } from "react";
import { useCreateUser } from "../lib/queries";

function CreateUserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  function HandleCreateUser() {
    const { createUser } = useCreateUser();
    createUser({ variables: { name, age, isMarried } });
  }

  return (
    <form className="w-1/2 mx-auto flex flex-col gap-2 bg-slate-950 p-4 rounded-lg items-center">
      <input
        className="bg-slate-800 rounded-lg p-2 w-full"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-slate-800 rounded-lg p-2 w-full"
        type="number"
        placeholder="age"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        className="bg-slate-800 rounded-lg p-2 w-full"
        type="checkbox"
        placeholder="isMarried"
        onChange={(e) => setIsMarried(e.target.checked)}
      />
      <button
        className="bg-slate-800 hover:bg-slate-700 rounded-lg p-2 w-full"
        onClick={HandleCreateUser}
      >
        Create user
      </button>
    </form>
  );
}

export default CreateUserForm;
