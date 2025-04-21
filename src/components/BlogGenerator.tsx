
import { useState } from "react";
import BlogForm, { BlogFormData } from "./BlogForm";
import BlogPreview from "./BlogPreview";
import { Sparkles } from "lucide-react";

const BlogGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [currentFormData, setCurrentFormData] = useState<BlogFormData | null>(null);

  // Mock AI blog generation function
  const generateBlog = async (data: BlogFormData) => {
    // In a real app, this would call an API endpoint
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const paragraphs = [
      `${data.title} is a fascinating topic that many people are interested in these days. As we explore ${data.topic}, we'll cover several important aspects that make this subject so compelling.`,
      
      `When we think about ${data.keywords.split(',')[0] || data.topic}, it's important to consider the broader context. Research has shown that understanding the fundamentals helps build a stronger foundation for advanced concepts.`,
      
      `One of the most interesting aspects of ${data.topic} is how it connects to our everyday lives. Whether you're a professional in the field or simply curious about the subject, there's something here for everyone.`,
      
      `Experts in ${data.topic} often emphasize the importance of continuous learning. As technology evolves and new discoveries are made, staying updated with the latest information becomes increasingly valuable.`,
      
      `To summarize, ${data.title} represents an exciting area with vast potential. By focusing on key elements like ${data.keywords || 'core principles'}, we can develop a deeper appreciation for this fascinating subject.`
    ];
    
    const content = paragraphs.join('\n\n');
    setGeneratedContent(content);
    setCurrentFormData(data);
    setIsGenerating(false);
  };

  const handleGenerate = (data: BlogFormData) => {
    generateBlog(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BlogForm onGenerate={handleGenerate} isGenerating={isGenerating} />
          
          {generatedContent && currentFormData ? (
            <BlogPreview blogContent={generatedContent} formData={currentFormData} />
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="bg-blog-accent p-6 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-blog-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Generate Your Blog</h3>
              <p className="text-gray-500 max-w-md">
                Fill out the form on the left with your blog details and click "Generate Blog" to create AI-powered content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



export default BlogGenerator;
