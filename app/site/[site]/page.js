/*
 * TODO:
 * 1a. Add a list of posts for the site
 * 1b. display some error message if the site doesn't exist/is invalid
 * 2. Add a way to create a new post
 *  - this can maybe be through a separate page (eg. /:site/new)
 */

export default async function SitePage({ params }) {
  const p = await params;
  const site = p.site;

  return (
    <div>
      <h1>Site: {site}</h1>
      <div>
        <p>This is the page for {site}</p>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const p = await params;
  return {
    title: `Site: ${p.site}`,
  };
}
