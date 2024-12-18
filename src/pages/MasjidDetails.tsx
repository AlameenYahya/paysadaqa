import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Mosque {
  id: string;
  name: string;
  address: string;
  image: string;
}

const MasjidDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [mosque, setMosque] = useState<Mosque | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMosqueDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/masjid/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch Masjid details");
        }
        const data = await response.json();
        setMosque(data.mosque);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMosqueDetails();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-primary mb-4">{mosque?.name}</h1>
      <p className="text-gray-600 mb-4">{mosque?.address}</p>
      <img
        src={mosque?.image || "/src/images/Paysadaqa.png"}
        alt={mosque?.name}
        className="w-full max-w-md h-auto rounded-lg shadow-md"
      />
    </div>
  );
};

export default MasjidDetails;
