//  This shouldn't have component code. Components are for the client, this is for the server.

//  /api/new-meetup     is the location of this API.

//  This function gets called when this API endpoint gets called.

//  Can get like the request header, req body, etc.
function handler(req, res) {
  //  Now only POST   /api/new-meetup will trigger this code:
  if (req.method === "POST") {
    const data = req.body;

    //    This is just object destructuring:
    const { title, image, address, description } = data;
  }
}

export default handler;
