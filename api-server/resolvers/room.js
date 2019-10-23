import { AuthenticationError } from 'apollo-server';

const rooms = async (_, args, context) => {
    if (!context.user) throw new AuthenticationError('Token is expired or do not exist');
    const { Room } = context.model;
    const { filterOptions } = args;

    try {
        const results = await Room.findAllByFilter(filterOptions);

        return results.map(result => ({
            room: result,
            roomOption: result.RoomOption,
        }));
    } catch (error) {
        throw error;
    }
};

const reserveRoom = async (_, args, context) => {
    if (!context.user) throw new AuthenticationError('Token is expired or do not exist');

    const {
        user: { id },
        model: { Booking },
    } = context;
    const { data } = args;

    try {
        const created = await Booking.registerNewBooking({ ...data, userId: id });
        return { success: created };
    } catch (error) {
        throw error;
    }
};

export const Query = { rooms };
export const Mutation = { reserveRoom };
