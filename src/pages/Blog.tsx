import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Best Remote-Controlled Mowers for 2024",
      excerpt: "Discover the latest in remote-controlled mower technology and find the perfect solution for your garden.",
      date: "2024-01-15",
      author: "Bashee Gardens Team",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Garden Maintenance Tips for Winter",
      excerpt: "Keep your garden in perfect condition during the colder months with these professional tips.",
      date: "2024-01-10",
      author: "Garden Expert",
      readTime: "3 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Choosing the Right Equipment for Your Projects",
      excerpt: "A comprehensive guide to selecting garden equipment for estates and large residential properties.",
      date: "2024-01-05",
      author: "Equipment Specialist",
      readTime: "7 min read",
      image: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding-sm bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero mb-6">Garden Equipment Blog</h1>
            <p className="text-body text-muted-foreground">
              Expert tips, equipment reviews, and garden maintenance advice from our professional team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card-elegant overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-foreground">{post.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" className="group p-0 h-auto">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-16 p-8 bg-muted/50 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">More Content Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              We're working on bringing you more helpful guides and equipment reviews.
            </p>
            <Link to="/contact">
              <Button>
                Subscribe for Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;