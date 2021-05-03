import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const requester = this.usersRepository.findById(user_id);

        if (!requester) {
            throw new Error('You cannot get the list');
        }

        if (!requester.admin) {
            throw new Error('You are not admin');
        }

        const users = this.usersRepository.list();

        return users;
    }
}

export { ListAllUsersUseCase };
