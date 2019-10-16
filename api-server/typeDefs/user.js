import { gql } from 'apollo-server';

export default gql`
    type User {
        id: ID!
        email: String
        password: String
        salt: String
        name: String
        isSuperHost: Boolean
    }

    extend type Query {
        user(id: ID): User
    }

    extend type Mutation {
        registerUser(data: RegisterInput!): RegisterResponse
    }

    "Input"
    input RegisterInput {
        email: String!
        password: String!
        name: String!
    }

    "Response"
    type RegisterResponse {
        token: String!
        user: User!
    }
`;
