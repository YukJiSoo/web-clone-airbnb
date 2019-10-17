import gql from 'graphql-tag';

export const GET_ROOMS = gql`
    query {
        rooms {
            room {
                id
                name
                price
                maxGuest
                starRating
                reviewNum
                imagePath
                roomTypeId
            }
            roomOption {
                id
                bed
                bedroom
                bathroom
                freeParking
                wifi
                kitchen
                washer
            }
        }
    }
`;
