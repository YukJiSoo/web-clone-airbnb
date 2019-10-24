import gql from 'graphql-tag';

export const JOIN_USER = gql`
    mutation JoinUser($email: String!, $password: String!) {
        joinUser(email: $email, password: $password) {
            token
            user {
                email
                password
            }
        }
    }
`;
