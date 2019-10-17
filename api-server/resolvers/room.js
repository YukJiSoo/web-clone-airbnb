import { AuthenticationError } from 'apollo-server';

const rooms = async (_, __, context) => {
    if (!context.user) throw new AuthenticationError('Token is expired or do not exist');
    const { Room, RoomOption } = context.model;

    try {
        const results = await Room.findAll({
            include: [RoomOption],
        });
        return results.map(result => ({
            room: result,
            roomOption: result.RoomOption,
        }));
    } catch (error) {
        throw error;
    }
};

export const Query = { rooms };
