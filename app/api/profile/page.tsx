// pages/profile.tsx

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Profile = () => {
  // Example user data
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    avatar: '/avatar.jpg', // Replace with actual avatar image path
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Head>
        <title>{user.username}'s Profile - Duolingo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <div className="p-4 bg-white rounded-full shadow-lg">
          <img
            src={user.avatar}
            alt="Profile Picture"
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>

        <h1 className="mt-4 text-2xl font-bold">{user.username}</h1>
        <p className="text-gray-500">{user.email}</p>

        <div className="flex mt-8 space-x-4">
          <Link href="/edit-profile">
            <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300">
              Edit Profile
            </a>
          </Link>
          <Link href="/settings">
            <a className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300">
              Settings
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Profile;
