export async function GET() {
  return Response.json(
    {
      name: "Soona Coin",
      symbol: "SOONA",
      description:
        "Created during a Turbin3 course, Soona Coin is a token that will be used to reward the best students of the course.",
      image: "https://chainsona.dev/wba-turbin3-soona.png",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Content-Encoding, Accept-Encoding",
        "Content-Type": "application/json",
      },
    }
  );
}
