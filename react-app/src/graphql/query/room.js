import gql from 'graphql-tag';

export const GET_ROOMS = gql`
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

export const createDateFilterOption = ({ startDate, endDate }) => ({
    checkIn: startDate.format('YYYY[-]MM[-]DD'),
    checkOut: endDate.format('YYYY[-]MM[-]DD'),
});
