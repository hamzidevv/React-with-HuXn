const App = () => {
  return (
    <>
      <button className="btn btn-soft">Default</button>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-secondary">Secondary</button>
      <button className="btn btn-soft btn-accent">Accent</button>
      <button className="btn btn-soft btn-info">Info</button>
      <button className="btn btn-soft btn-success">Success</button>
      <button className="btn btn-soft btn-warning">Warning</button>
      <button className="btn btn-soft btn-error">Error</button>

      <div className="join join-vertical bg-base-100">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
