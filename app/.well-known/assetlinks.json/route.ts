const body = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.nonokaoshiro.ringring",
      sha256_cert_fingerprints: [
        "D7:07:7D:86:46:DC:96:6A:2F:EA:DE:56:1F:64:26:C9:35:FB:08:41:10:C0:59:4D:21:8A:7E:46:3F:50:FF:25",
      ],
    },
  },
];

export function GET() {
  return Response.json(body, {
    headers: {
      "cache-control": "public, max-age=300",
    },
  });
}
