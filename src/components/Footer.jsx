export default function Footer() {
  return (
    <div className="mt-16">
      <div
        id="social-media"
        className="flex justify-around text-violet-600 [&_button:hover]:text-blue-500 mb-12"
      >
        <button>Instagram</button>
        <button>Tiktok</button>
        <button>Twitter</button>
        <button>Facebook</button>
        <button>YouTube</button>
      </div>

      <div className="flex justify-evenly text-violet-600 [&_button:hover]:text-blue-500">
        <div className="flex flex-col">
          <p className="mb-4 ">US</p>
          <button>About ReactShows</button>
          <button>Contact Us</button>
          <button>Our Authors</button>
        </div>

        <div className="flex flex-col">
          <p className="mb-4">BASIS</p>
          <button>Conditions of Use</button>
          <button>Privacy Policy</button>
        </div>

        <div className="flex flex-col">
          <p className="mb-4">COMMUNITY</p>
          <button>Guides</button>
          <button>Discussions</button>
          <button>Featured</button>
          <button>Support Forums</button>
        </div>
      </div>
    </div>
  );
}
