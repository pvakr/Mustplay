// components/FacebookDataDeletion.jsx

import Navigation from "./Navigation";
import Footer from "./Footer";

const facebookDeletionContent = `
Facebook Data Deletion Instructions

MustPlay Games does not store your personal data obtained from Facebook on our servers.
However, according to Facebook Platform Policy, we must provide a Data Deletion Instructions URL.

If you wish to delete your data related to MustPlay Games obtained through Facebook Login, please follow these steps:

1. Go to your Facebook account’s Settings & Privacy → Settings.
2. Click Apps and Websites in the left-hand menu.
3. Find MustPlay Games in the list of active apps and websites.
4. Click Remove to delete the app and its associated data.

Once you remove the MustPlay Games app, all data shared with us through Facebook will be permanently deleted.

If you experience any issues or would like your data manually deleted, please contact us at:
📧 support@mustplay.com
`;

const FacebookDataDeletion = () => {
  return (
    <div>
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center overflow-hidden">
        <Navigation />

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-300 rounded-full animate-pulse opacity-20"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-300 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-blue-300 rounded-full animate-pulse opacity-25"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 bg-cyan-400 rounded-full animate-bounce opacity-20"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Facebook Data Deletion
          </h1>
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-10 text-left">
            <article className="prose max-w-none whitespace-pre-wrap text-gray-800 leading-relaxed">
              {facebookDeletionContent}
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacebookDataDeletion;
