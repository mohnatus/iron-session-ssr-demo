import { IRON_OPTIONS } from '@/constants';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';

const loginRoute: NextApiHandler = async (req, res) => {

	const { login } = req.body;
	// находим пользователя в БД и записываем в сессию
	req.session.user = {
		id: 230,
		name: login || 'John Doe',
	};
	await req.session.save();
	res.send({ ok: true });
};

export default withIronSessionApiRoute(loginRoute, IRON_OPTIONS);
