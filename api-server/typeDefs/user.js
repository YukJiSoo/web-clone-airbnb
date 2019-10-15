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
        login(email: String!, password: String!): LoginResponse
    }

    "Response"
    type LoginResponse {
        token: String!
        user: User!
    }
`;
