import { redirect } from "next/navigation";
import clientPromise from "../lib/mongodb";

const DynamicRoute = async ({params}) => {
    const {shortUrl} = await params;
    const client = await clientPromise;
    const db = client.db('linkslicer')
    const collection = db.collection('url')
    const data = await collection.findOne({ shortUrl: shortUrl })
  console.log(data)
    if (data) {
        return redirect(data.url);
    } else {
        return redirect('/');
    }
}

export default DynamicRoute;