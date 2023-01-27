import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useState } from 'react';

const Auth: NextPage = () => {
	const router = useRouter();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({
				login,
				password,
			}),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.ok) {
					router.replace('/');
				}
			});
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='login'>Логин</label>
					<br />
					<input
						type='text'
						id='login'
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='pass'>Пароль</label>
					<br />
					<input
						type='text'
						id='pass'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit'>Авторизоваться</button>
			</form>
		</>
	);
};

export default Auth;
