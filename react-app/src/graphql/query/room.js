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

export const GET_ROOMS_FILTERED_BY_DATE = gql`
    query RoomsFilteredByDate($filterOptions: RoomsFilteringOptionInput) {
        rooms(filterOptions: $filterOptions) {
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

export const createFilterOption = ({ startDate, endDate }) => ({
    date: {
        checkIn: startDate.format('YYYY[-]MM[-]DD'),
        checkOut: endDate.format('YYYY[-]MM[-]DD'),
    },
});
