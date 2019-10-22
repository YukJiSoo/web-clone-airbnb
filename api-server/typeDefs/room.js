import { gql } from 'apollo-server';

export default gql`
    type Room {
        id: ID!
        name: String
        price: Int
        maxGuest: Int
        starRating: Int
        reviewNum: Int
        imagePath: String
        roomTypeId: Int
    }

    extend type Query {
        rooms(filterOptions: RoomsFilteringOptionInput): [RoomsResponse]
    }

    "Input"
    input RoomsFilteringOptionInput {
        date: DateFilterInput
    }

    input DateFilterInput {
        checkIn: String!
        checkOut: String!
    }

    "Response"
    type RoomsResponse {
        room: Room!
        roomOption: RoomOption!
    }
`;
