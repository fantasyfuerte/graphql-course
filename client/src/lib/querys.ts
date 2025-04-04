import { gql, useQuery, useMutation } from "@apollo/client";

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

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
      id
    }
  }
`;

const useGetUsers = () => {
  const { data, error, loading } = useQuery(GET_USERS);
  return { data, error, loading };
};

const useGetUserById = (id: number) => {
  const { data, error, loading } = useQuery(GET_USER_BY_ID, {
    variables: { id: id },
  });
  return { data, error, loading };
};

const useCreateUser = (name: string, age: number, isMarried: boolean) => {
  useMutation(CREATE_USER, {
    variables: { name: name, age: age, isMarried: isMarried },
  });
};

export { useCreateUser, useGetUserById, useGetUsers };
