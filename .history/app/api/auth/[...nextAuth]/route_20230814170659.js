import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { connectToDB } from '@utils/database'
import User from '@models/user'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            // Check if a user already exists



            // If user does not already exist, create a new user

            return true;

        } catch (err) {
            console.error('Login unsuccessful: ', err)
            return false;
        }
    }
})

export { handler as GET, handler as POST }