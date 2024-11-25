// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Добавьте других провайдеров по необходимости
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; // Хранение токенов
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken; // Передаем токен в сессию
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Персонализированная страница для входа
  },
};

export default NextAuth(authOptions);
