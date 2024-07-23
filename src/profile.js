import { useAuth0 } from "@auth0/auth0-react";
import { Button } from ".//components/Button";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex justify-center pb-20">
        <div>
          <img
            src="images/profile-banner.jpg"
            className="w-[800px] h-[250px] object-cover overflow-hidden"
          />

          <div className="m-14 absolute top-28">
            <div className="flex items-center">
              <img
                className="rounded-full mr-8"
                src={user.picture}
                alt={user.name}
              />
              <div>
                <h2 className="text-3xl mt-2">Hello {user.name}!</h2>
                <p className="text-lg mt-2">{user.email}</p>
              </div>
            </div>
          </div>

          <h1 className="text-center text-sky-600 text-3xl mt-10 mb-4">
            Welcome to Jet Set!
          </h1>
          <p className="text-center text-zinc-700 text-lg px-8 lg:px-0">
            We pride ourselves on bringing you to stunning locations and
            providing top quality services to match.
          </p>

          <div className="bg-zinc-900 rounded-xl mx-12 mt-8 py-6">
            <h2 className="text-center text-white text-2xl mb-2">
              Watch the official trailer here:
            </h2>
            <div className="flex justify-center">
              <a
                href="https://youtu.be/QtYahgWFtK0?feature=shared"
                target="_blank"
              >
                <Button
                  className="btns"
                  buttonStyle="btn--blue"
                  buttonSize="btn--large"
                >
                  WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
