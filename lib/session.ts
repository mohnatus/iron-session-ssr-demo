import { User } from '@/pages/api/user';

declare module 'iron-session' {
	interface IronSessionData {
		user?: User;
	}
}
