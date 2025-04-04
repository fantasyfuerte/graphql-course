import { useQuery, useMutation, gql } from "@apollo/client";
import { SlRefresh } from "react-icons/sl";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      age
      isMarried
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      name
      age
      id
    }
  }
`;

type User = {
  name?: string;
  id?: number;
  isMarried?: boolean;
  age?: number;
};

function App() {
  const {
    data: getUsersData,
    error: getUsersError,
    loading: getUsersLoading,
  } = useQuery(GET_USERS);

  const {
    data: getUserByIdData,
    error: getUserByIdError,
    loading: getUserByIdLoading,
  } = useQuery(GET_USER_BY_ID);

  return (
    <main>
      <h1 className="text-center text-3xl my-12">
        Fetching data from Apollo Graphql server
      </h1>
      <div>
        <h4 className="text-xl text-center">Users:</h4>
      </div>
      {getUsersLoading ? (
        <div className="animate-spin">
          <SlRefresh size={36} />
        </div>
      ) : getUsersError ? (
        <p className="text-xl text-center opacity-70 font-semibold mt-6">
          Error: {getUsersError.message}
        </p>
      ) : (
        <table className="">
          {getUsersData.getUsers.map((user: User) => (
            <li key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
              <p>It's {!user.isMarried && "not"} married</p>
            </li>
          ))}
        </table>
      )}
    </main>
  );
}

export default App;
