import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Fragment } from 'react';

const LandingPage = () => {
	return (
		<Fragment>
			<p>Hello world</p>
			<Link href='/sign-up'>
				<Button>Login</Button>
			</Link>
			<Link href='/sign-in'>
				<Button>Register</Button>
			</Link>
		</Fragment>
	);
};

export default LandingPage;
