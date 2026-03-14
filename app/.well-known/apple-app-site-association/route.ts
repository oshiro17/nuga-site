const body = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "NWJTJ9ZCZS.jp.nwjtj9czsz.ringring",
        paths: ["/u/*", "/friend/*", "/invite/*"],
      },
    ],
  },
};

export function GET() {
  return new Response(JSON.stringify(body), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=300",
    },
  });
}
