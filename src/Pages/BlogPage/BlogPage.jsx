import React from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Blog Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tellus fermentum, tincidunt risus nec, luctus leo. Vivamus vel turpis velit. Aliquam efficitur mi eu tellus hendrerit consectetur. Mauris ultrices eleifend massa, ac ultricies orci facilisis sed. Aliquam aliquam velit lacus, eget condimentum quam ullamcorper ac. Sed suscipit aliquet ultrices.",
    },
    {
      title: "Blog Post 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tellus fermentum, tincidunt risus nec, luctus leo. Vivamus vel turpis velit. Aliquam efficitur mi eu tellus hendrerit consectetur. Mauris ultrices eleifend massa, ac ultricies orci facilisis sed. Aliquam aliquam velit lacus, eget condimentum quam ullamcorper ac. Sed suscipit aliquet ultrices.",
    },
    {
      title: "Blog Post 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tellus fermentum, tincidunt risus nec, luctus leo. Vivamus vel turpis velit. Aliquam efficitur mi eu tellus hendrerit consectetur. Mauris ultrices eleifend massa, ac ultricies orci facilisis sed. Aliquam aliquam velit lacus, eget condimentum quam ullamcorper ac. Sed suscipit aliquet ultrices.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>

        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-800">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
