import { IRON_OPTIONS } from '@/constants';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';

export type User = {
	id: number;
	name: string;
};

const userRouter: NextApiHandler = (req, res) => {
	res.send({
		user: req.session.user,
	});
};

export default withIronSessionApiRoute(userRouter, IRON_OPTIONS);
