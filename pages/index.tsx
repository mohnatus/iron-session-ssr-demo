import { IRON_OPTIONS } from '@/constants';
import { withIronSessionSsr } from 'iron-session/next';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { User } from './api/user';

interface ProfileProps {
	user: User | null
}

const Profile: NextPage<ProfileProps> = ({ user }) => {
	const router = useRouter();

	function logout() {
		fetch('./api/logout')
			.then((res) => res.json())
			.then(() => {
				router.push('/auth')
			});
	}

	if (!user) {
		return (
			<>
				<h1>Unauthorized access</h1>
				<div>
					<Link href='/auth'>Log in</Link>
				</div>
			</>
		);
	}

	return (
		<>
			<h1>Profile</h1>
			<div>
				Hello, <b>{user.name}</b>
			</div>

			<div>
				<button onClick={logout}>Log out</button>
			</div>
		</>
	);
};



export default Profile;

export const getServerSideProps = withIronSessionSsr(
	async function getServerSideProps({ req }) {
    return {
      props: {
        user: req.session.user || null,
      },
    };
	},
	IRON_OPTIONS
)
