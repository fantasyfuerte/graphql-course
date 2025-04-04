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

function App() {
  const { data, error, loading } = useQuery(GET_USERS);

  return (
    <main>
      <h1 className="text-center text-3xl my-12">
        Fetching data from Apollo Graphql server
      </h1>
      <div>
        <h4 className="text-xl text-center">Users:</h4>
      </div>
      {loading ? (
        <div className="animate-spin">
          <SlRefresh size={36} />
        </div>
      ) : error ? (
        <p className="text-xl text-center opacity-70 font-semibold mt-6">
          Error: {error.message}
        </p>
      ) : (
        <ul>
          {data.getUsers.map((user) => {
            <li key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
              <p>It's {!user.isMarried && "not"} married</p>
            </li>;
          })}
        </ul>
      )}
    </main>
  );
}

export default App;
