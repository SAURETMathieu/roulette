'use server';

import { createServer } from '@/src/lib/supabase/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const signInWithPassword = async (data: FormData) => {
	const supabase = createServer();
	const { error, data: test } = await supabase.auth.signInWithPassword({
		email: data.get('email') as string,
		password: data.get('password') as string,
	});
console.log(test);
	if (error) {
		return {
			message: error.message,
		};
	}
  const locale = cookies().get('NEXT_LOCALE')?.value || 'fr';
	redirect(`/${locale}`);
};

export const signUpWithPassword = async (data: FormData) => {
	const supabase = createServer();
	const { error } = await supabase.auth.signUp({
		email: data.get('email') as string,
		password: data.get('password') as string,
	});

	if (error) {
		return {
			message: error.message,
		};
	}
  const locale = cookies().get('NEXT_LOCALE')?.value || 'fr';
	redirect(`/${locale}/login`);
	//redirect('/auth/confirmation');
};

export const signOut = async () => {
	const supabase = createServer();
	await supabase.auth.signOut();
  const locale = cookies().get('NEXT_LOCALE')?.value || 'fr';
	redirect(`/${locale}/login`);
};

export const sentResetPassword = async (email: string) => {
	const supabase = createServer();
	const { error } = await supabase.auth.resetPasswordForEmail(email);

	if (error) {
		return {
			message: error.message,
		};
	}
};

export const resetPassword = async (password: string) => {
	const supabase = createServer();
	const { error } = await supabase.auth.updateUser({
		password,
	});

	if (error) {
		return {
			message: error.message,
		};
	}
};

export const sendMagicLink = async (email: string) => {
	const supabase = createServer();
	const { error } = await supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: false,
		},
	});

	if (error) {
		return {
			message: error.message,
		};
	}
};