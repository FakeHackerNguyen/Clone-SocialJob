function CustomHeader({
  // eslint-disable-next-line react/prop-types
  isLocation,
  // eslint-disable-next-line react/prop-types
  content = "Your profile helps you discover new people and opportunities",
}) {
  return (
    <header className="location-sign-up text-align-center onboarding-page__header">
      <h1 className="location-sign-up text-heading-xlarge">
        <strong>{content}</strong>
      </h1>

      {isLocation && (
        <h2 className="location-sign-up onboarding-page__subheader">
          See people, jobs, and news in your area.
        </h2>
      )}
    </header>
  );
}
export default CustomHeader;
