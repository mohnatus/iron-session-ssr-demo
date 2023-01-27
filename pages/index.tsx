import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { User } from './api/user';

const Profile: NextPage = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		fetch('./api/user')
			.then((res) => res.json())
			.then((data) => {
				if (data.user) {
					setUser(data.user);
				}
			})
			.finally(() => setLoading(false));
	}, []);

	function logout() {
		fetch('./api/logout')
			.then((res) => res.json())
			.then(() => {
				setUser(null);
			});
	}

	if (loading) {
		return <>Loading...</>;
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
