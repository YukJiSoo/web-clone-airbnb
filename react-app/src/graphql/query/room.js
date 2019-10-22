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

// TODO: 날짜 필터링 요청 쿼리
export const GET_ROOMS_FILTERED_BY_DATE = gql`
    query {
        rooms {
            room {
                id
            }
            roomOption {
                id
            }
        }
    }
`;
