JS
Copy to Clipboard

if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
Using Background Fetch requires a registered service worker. Then call backgroundFetch.fetch() to perform a fetch. This returns a promise that resolves with a BackgroundFetchRegistration.

A background fetch may fetch a number of files. In our example the fetch requests an MP3 and a JPEG. This enables a package of files that the user sees as one item (for example a podcast and artwork) to be downloaded at once.

JS
Copy to Clipboard

navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    }
  );
});
