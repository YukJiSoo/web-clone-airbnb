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
        rooms: [RoomsResponse]
    }

    type RoomsResponse {
        room: Room!
        roomOption: RoomOption!
    }
`;
