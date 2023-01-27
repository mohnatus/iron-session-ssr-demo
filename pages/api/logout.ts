import { IRON_OPTIONS } from '@/constants';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';

const logoutRoute: NextApiHandler = async (req, res) => {
	req.session.destroy();
	res.send({ ok: true });
};

export default withIronSessionApiRoute(logoutRoute, IRON_OPTIONS);
