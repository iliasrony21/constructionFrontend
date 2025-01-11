import blog1 from '../../../../assets/images/blog1.jpeg'
import blog2 from '../../../../assets/images/blog2.jpeg'
import blog3 from '../../../../assets/images/blog3.jpeg'

const BlogNewsSection = () => {
  const articles = [
    {
      id: 1,
      title: "5 Tips for a Successful Project",
      author: "Jane Doe",
      date: "Jan 10, 2025",
      excerpt:
        "Learn how to manage your projects efficiently with these five essential tips...",
      image: blog1,
      link: "#",
    },
    {
      id: 2,
      title: "The Latest Trends in Architecture",
      author: "John Smith",
      date: "Jan 9, 2025",
      excerpt:
        "Discover the top trends that are shaping the future of modern architecture...",
      image: blog2,
      link: "#",
    },
    {
      id: 3,
      title: "Sustainability in Construction",
      author: "Alice Johnson",
      date: "Jan 8, 2025",
      excerpt:
        "Explore the innovative techniques making construction more sustainable...",
      image: blog3,
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Blog & News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  By {article.author} • {article.date}
                </p>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;
